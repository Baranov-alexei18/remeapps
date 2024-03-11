import React from "react";
import { Grid, Button, Container, Box, Modal, Typography } from '@mui/material';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ChatLogin = (props) => {


    const login = () => {
        const auth = getAuth();

        signInWithPopup(auth, provider)
            .then((result) => {
                GoogleAuthProvider.credentialFromResult(result);
                return result.user;

            }).catch((error) => {
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(credential)
            }).finally(
                props.handleClose
            );
    }

    return (

        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}
                style={{
                    borderRadius: '20px'
                }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Авторизация с помощью Google
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    На данный момент единственный способ авторизоваться в приложении
                </Typography>
                <Container color='success'>
                    <Grid container justifyContent={'center'} alignItems={'center'}>
                        <Button variant="contained" onClick={login} style={{ marginTop: "12px" }}> Авторизация с помощью Google</Button>
                    </Grid>
                </Container>
            </Box>

        </Modal>
    );
};

export default ChatLogin
