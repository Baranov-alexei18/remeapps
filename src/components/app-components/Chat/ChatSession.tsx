import React, { useState } from "react";
import { Grid, Button, Container, TextField, Avatar } from '@mui/material';
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { getFirestore, doc, setDoc, Timestamp, collection, query, orderBy } from "firebase/firestore";

const ChatSession = () => {
    const auth = getAuth();
    const firestore = getFirestore();

    const collectionMessages = collection(firestore, "messages");

    const [user] = useAuthState(auth);

    const [valueMessage, setValueMessage] = useState("")
    const [messages, loading] = useCollectionData(
        query(collectionMessages, orderBy("createdAt"))
    )

    const sendMessage = async () => {
        setValueMessage('')

        await setDoc(doc(collectionMessages), {
            uid: user?.uid,
            displayName: user?.displayName,
            photoUrl: user?.photoURL,
            text: valueMessage,
            createdAt: Timestamp.fromDate(new Date())
        });

    }

    if (loading) {
        return <div>...Загрузка</div>
    }

    return (
        <Container color='success'>
            <Grid container justifyContent={'center'} style={{ marginTop: "12px" }}>
                <div style={{ width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto' }}>
                    {messages?.map(message =>
                        <div
                            key={message.uid}
                            style={{
                                margin: '10px',
                                border: user?.uid === message.uid ? '2px solid grey' : '2px solid blue',
                                marginLeft: user?.uid === message.uid ? 'auto' : '10px !important',
                                width: 'fit-content',
                                borderRadius: '12px',
                                fontSize: '18px'
                            }}>
                            <Grid container alignContent={'center'}>
                                <Avatar src={message.photoURL} />
                                <div style={{ margin: 'auto 10px' }}>{message.displayName}</div>
                            </Grid>
                            <div style={{
                                backgroundColor: 'whitesmoke',
                                color: "black",
                                borderRadius: '12px',
                                margin: '2px',
                                fontSize: '14px',
                                padding: '5px',
                                textAlign: 'left',
                                maxWidth: '300px',
                                wordWrap: 'break-word'

                            }}>{message.text}</div>
                        </div>
                    )}
                </div>
                <Grid container direction={"column"} alignItems={'flex-end'} style={{ width: '80%', marginTop: "12px" }}>
                    <TextField value={valueMessage} variant="outlined" fullWidth maxRows={2} onChange={(e) => setValueMessage(e.target.value)}></TextField>
                    <Button variant="contained" onClick={sendMessage}> Отправить</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ChatSession
