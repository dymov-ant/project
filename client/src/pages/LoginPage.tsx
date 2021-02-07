import React, {FC} from "react"
import {Link} from "react-router-dom"
import {Field, Form, Formik} from "formik"
import {TextField} from "formik-material-ui"
import * as Yup from "yup"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
// import TextField from "@material-ui/core/TextField"
import MuiLink from "@material-ui/core/Link"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import {makeStyles} from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import LinearProgress from "@material-ui/core/LinearProgress"
import Grid from "@material-ui/core/Grid"
import {useDispatch, useSelector} from "react-redux"
import {GlobalState} from "../redux/store"
import { ILoginData } from "../types/authTypes"
import { login } from "../redux/actions/auth"

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    margin: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Некорректный email")
        .required("Поле обязательно"),
    password: Yup.string()
        .min(6, "Минимум 6 символов")
        .max(15, "Максимум 15 символов")
        .required("Поле обязательно")
})

export const LoginPage: FC = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const isLoading = useSelector((state: GlobalState) => state.authReducer.isAuthLoading)

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Авторизация
                </Typography>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={(values: ILoginData) => {
                        dispatch(login(values))
                    }}
                >
                    {({submitForm, errors, touched}) => (
                        <Form className={classes.form} noValidate>
                            <Field
                                type="email"
                                name="email"
                                component={TextField}
                                variant="outlined"
                                disabled={isLoading}
                                required
                                fullWidth
                                label="Email"
                                size="small"
                                helperText={(errors.email && touched.email) && errors.email}
                                className={classes.margin}
                            />
                            <Field
                                type="password"
                                name="password"
                                component={TextField}
                                variant="outlined"
                                disabled={isLoading}
                                required
                                fullWidth
                                label="Пароль"
                                size="small"
                                helperText={(errors.password && touched.password) && errors.password}
                                className={classes.margin}
                            />
                            {isLoading && <LinearProgress/>}
                            <Button
                                onClick={submitForm}
                                fullWidth
                                variant="contained"
                                color="primary"
                                disabled={isLoading}
                                className={classes.submit}
                            >
                                Войти
                            </Button>
                            {!isLoading && <Grid container justify="flex-end">
                                <Grid item>
                                    <MuiLink variant="body2" component={Link} to="/register">
                                        Нет аккаунта? Пройди регистрацию!
                                    </MuiLink>
                                </Grid>
                            </Grid>}
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    )
}