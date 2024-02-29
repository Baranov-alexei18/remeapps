import React from "react";
import { AppBar, Toolbar, Grid, Button } from '@mui/material';
import ChatLogin from "./ChatLogin.tsx";
import ChatSession from "./ChatSession.tsx";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"

const AppChat = () => {

    const auth = getAuth();
    const [user, loading] = useAuthState(auth)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    if (loading) {
        return <div> ....Загрузка</div>
    }

    return (
        <>
            <AppBar position="static" color='success'>
                <Toolbar>
                    <Grid container justifyContent={"flex-start"}>
                        {user && <h5 style={{ margin: 0 }}>{user.displayName}</h5>}
                    </Grid>
                    <Grid container justifyContent={"flex-end"}>
                        {
                            user ?
                                <Button variant="contained" color="primary" onClick={() => auth.signOut()}> Выйти</Button>
                                :
                                <Button variant="contained" color="primary" onClick={handleOpen}>Login</Button>
                        }
                        <ChatLogin open={open} handleClose={handleClose}></ChatLogin>
                    </Grid>
                </Toolbar>
            </AppBar>
            {user ?
                <ChatSession />
                :
                <h2> Чтобы увидеть чат надо авторизоваться</h2>
            }
        </>
    );
};

export default AppChat
