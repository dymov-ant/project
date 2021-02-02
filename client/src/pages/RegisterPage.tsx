import React, {FC} from "react"
import {Field, Form, Formik} from "formik"
import {Link} from "react-router-dom"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import {TextField} from "formik-material-ui"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import {makeStyles} from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import MuiLink from "@material-ui/core/Link"
import LinearProgress from "@material-ui/core/LinearProgress"
import {DatePickerField} from "../components/interface/DatePickerField"
import * as Yup from "yup"


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
        marginTop: theme.spacing(3),
    },
    margin: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

const RegisterSchema = Yup.object().shape({
    name: Yup.string().trim()
        .min(6, "Минимум 6 символов")
        .max(15, "Максимум 15 символов")
        .required("Поле обязательно"),
    email: Yup.string()
        .email("Некорректный email")
        .required("Поле обязательно"),
    password: Yup.string()
        .min(6, "Минимум 6 символов")
        .max(15, "Максимум 15 символов")
        .required("Поле обязательно"),
    birthDate: Yup.string()
        .required("Поле обязательно")
})

export const RegisterPage: FC = () => {
    const classes = useStyles()

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Регистрация
                </Typography>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                        birthDate: new Date()
                    }}
                    validationSchema={RegisterSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            setSubmitting(false)
                            alert(JSON.stringify(values, null, 2))
                        }, 5000)
                    }}
                >
                    {({submitForm, isSubmitting, errors, touched}) => (
                        <Form className={classes.form} noValidate>
                            <Field
                                type="text"
                                name="name"
                                component={TextField}
                                variant="outlined"
                                required
                                fullWidth
                                autoFocus
                                label="Имя и фамилия"
                                size="small"
                                helperText={(errors.name && touched.name) && errors.name}
                                className={classes.margin}
                            />
                            <Field
                                type="email"
                                name="email"
                                component={TextField}
                                required
                                variant="outlined"
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
                                required
                                fullWidth
                                label="Пароль"
                                size="small"
                                helperText={(errors.password && touched.password) && errors.password}
                                className={classes.margin}
                            />
                            <Field
                                type="text"
                                name="birthDate"
                                component={DatePickerField}
                                required
                                fullWidth
                                label="Дата рождения"
                                size="small"
                                disabled={isSubmitting}
                                helperText={(errors.birthDate && touched.birthDate) && errors.birthDate}
                                className={classes.margin}
                            />
                            {isSubmitting && <LinearProgress/>}
                            <Button
                                onClick={submitForm}
                                fullWidth
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                                className={classes.submit}
                            >
                                Регистрация
                            </Button>
                            {!isSubmitting && <Grid container justify="flex-end">
                                <Grid item>
                                    <MuiLink variant="body2" component={Link} to="/login">
                                        Уже есть аккаунт? Войти!
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
