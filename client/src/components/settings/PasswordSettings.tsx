import React, {FC} from "react"
import Paper from "@material-ui/core/Paper"
import * as Yup from "yup"
import {makeStyles} from "@material-ui/core/styles"
import {Field, Form, Formik} from "formik"
import {TextField} from "formik-material-ui"
import LinearProgress from "@material-ui/core/LinearProgress"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2)
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
        margin: theme.spacing(1, 0, 1),
    },
}))

const PasswordSettingsSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, "Минимум 6 символов")
        .max(15, "Максимум 15 символов")
        .required("Поле обязательно"),
    newPassword: Yup.string()
        .min(6, "Минимум 6 символов")
        .max(15, "Максимум 15 символов")
        .required("Поле обязательно"),
    newPassword2: Yup.string()
        .min(6, "Минимум 6 символов")
        .max(15, "Максимум 15 символов")
        .required("Поле обязательно")
})

export const PasswordSettings: FC = () => {
    const classes = useStyles()

    return (
        <Paper elevation={2} className={classes.paper}>
            <Typography component="p" variant="subtitle1" align="center">
                Пароль
            </Typography>
            <Formik
                initialValues={{
                    password: "",
                    newPassword: "",
                    newPassword2: ""
                }}
                validationSchema={PasswordSettingsSchema}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        console.log(123)
                        setSubmitting(false)
                        alert(JSON.stringify(values, null, 2))
                    }, 5000)
                }}
            >
                {({submitForm, isSubmitting, errors, touched}) => (
                    <Form className={classes.form} noValidate>
                        <Field
                            type="password"
                            name="password"
                            component={TextField}
                            variant="outlined"
                            required
                            fullWidth
                            label="Старый пароль"
                            size="small"
                            helperText={(errors.password && touched.password) && errors.password}
                            className={classes.margin}
                        />
                        <Field
                            type="password"
                            name="newPassword"
                            component={TextField}
                            required
                            variant="outlined"
                            fullWidth
                            label="Новый пароль"
                            size="small"
                            helperText={(errors.newPassword && touched.newPassword) && errors.newPassword}
                            className={classes.margin}
                        />
                        <Field
                            type="password"
                            name="newPassword2"
                            component={TextField}
                            required
                            variant="outlined"
                            fullWidth
                            label="Повторите новый пароль"
                            size="small"
                            helperText={(errors.newPassword2 && touched.newPassword2) && errors.newPassword2}
                            className={classes.margin}
                        />
                        {isSubmitting && <LinearProgress/>}
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Button
                                    type="submit"
                                    onClick={submitForm}
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    className={classes.submit}
                                >
                                    Сменить пароль
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Paper>
    )
}