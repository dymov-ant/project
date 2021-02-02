import React, {FC} from "react"
import {Field, Form, Formik} from "formik"
import * as Yup from "yup"
import {TextField} from "formik-material-ui"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import {makeStyles} from "@material-ui/core/styles"
import LinearProgress from "@material-ui/core/LinearProgress"
import {DatePickerField} from "../interface/DatePickerField"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"

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

const InfoSettingsSchema = Yup.object().shape({
    name: Yup.string().trim()
        .min(6, "Минимум 6 символов")
        .max(15, "Максимум 15 символов")
        .required("Поле обязательно"),
    email: Yup.string()
        .email("Некорректный email")
        .required("Поле обязательно"),
    birthDate: Yup.string()
        .required("Поле обязательно"),
    city: Yup.string()
        .max(30, "Максимум 30 символов"),
    maritalStatus: Yup.string()
        .max(30, "Максимум 30 символов"),
    education: Yup.string()
        .max(30, "Максимум 30 символов"),
    job: Yup.string()
        .max(30, "Максимум 30 символов")
})

export const InfoSettings: FC = () => {
    const classes = useStyles()
    return (
        <Paper elevation={2} className={classes.paper}>
            <Typography component="p" variant="subtitle1" align="center">
                Информация о пользователе
            </Typography>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    birthDate: new Date(),
                    city: "",
                    maritalStatus: "",
                    education: "",
                    job: ""
                }}
                validationSchema={InfoSettingsSchema}
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
                            type="text"
                            name="name"
                            component={TextField}
                            variant="outlined"
                            required
                            fullWidth
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
                        <Field
                            type="text"
                            name="city"
                            component={TextField}
                            variant="outlined"
                            fullWidth
                            label="Город"
                            size="small"
                            helperText={(errors.city && touched.city) && errors.city}
                            className={classes.margin}
                        />
                        <Field
                            type="text"
                            name="maritalStatus"
                            component={TextField}
                            variant="outlined"
                            fullWidth
                            label="Семейное положение"
                            size="small"
                            helperText={(errors.maritalStatus && touched.maritalStatus) && errors.maritalStatus}
                            className={classes.margin}
                        />
                        <Field
                            type="text"
                            name="education"
                            component={TextField}
                            variant="outlined"
                            fullWidth
                            label="Образование"
                            size="small"
                            helperText={(errors.education && touched.education) && errors.education}
                            className={classes.margin}
                        />
                        <Field
                            type="text"
                            name="job"
                            component={TextField}
                            variant="outlined"
                            fullWidth
                            label="Место работы"
                            size="small"
                            helperText={(errors.job && touched.job) && errors.job}
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
                                    Сохранить
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Paper>
    )
}