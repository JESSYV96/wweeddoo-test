import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import { currentUserTemp, login } from '../../redux/features/userSlice';
import { useAppDispatch } from '../../redux/hooks';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const LoginPage = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const navigation = useHistory()
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const auth = (e: any) => {
        if (email && password) {
            dispatch(login({ email, password }))
            navigation.push('/dashboard')
        }
    }

    const getCurrentUserTemp = (e: any) => {
        e.preventDefault();
        dispatch(currentUserTemp())
        navigation.push('/dashboard')
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign in
                    </Typography>
                <form className={classes.form}>
                    <TextField
                        onChange={e => setEmail(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus />
                    <TextField
                        onChange={e => setPassword(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password" />
                    <Button
                        onClick={(e) => auth(e)}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Sign In
                        </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="#" variant="body2" onClick={(e: any) => getCurrentUserTemp(e)}>
                                {"Passer l'étape de connexion"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export default LoginPage
