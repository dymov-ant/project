import React, {FC, FormEvent, useState} from "react"
import Paper from "@material-ui/core/Paper"
import {makeStyles} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import {UploadButton} from "../interface/UploadButton"
import Grid from "@material-ui/core/Grid"
import {useFormik} from "formik"
import Button from "@material-ui/core/Button"
import {PreviewPhoto} from "../PreviewPhoto"
import {useDispatch} from "react-redux"
import {updateProfilePhoto} from "../../redux/actions/profile"

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    submit: {
        margin: theme.spacing(1, 0, 1),
    },
    colPreview: {
        display: "flex",
        justifyContent: "flex-start",
        "@media (max-width:600px)": {
            justifyContent: "center"
        }
    },
    colButton: {
        display: "flex",
        justifyContent: "flex-end",
        "@media (max-width:600px)": {
            justifyContent: "center"
        }
    }
}))

interface IFormikValues {
    photo: File | null
}

export const PhotoSettings: FC = () => {
    const classes = useStyles()
    const [img, setImg] = useState<string | ArrayBuffer | null>(null)
    const dispatch = useDispatch()
    const initialValues: IFormikValues = {
        photo: null
    }
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: values => {
            if (values.photo) {
                const formData = new FormData()
                formData.append("photo", values.photo)
                dispatch(updateProfilePhoto(formData))
            }
        },
    })

    const handleChangePhoto = (event: FormEvent<HTMLInputElement>) => {
        if (event.currentTarget && event.currentTarget.files) {
            formik.setFieldValue("photo", event.currentTarget.files[0])
            const reader = new FileReader()
            reader.onload = ev => {
                if (ev.target) {
                    setImg(ev.target.result)
                }
            }
            reader.readAsDataURL(event.currentTarget.files[0])
        }
    }

    return (
        <Paper elevation={2} className={classes.paper}>
            <Typography component="p" variant="subtitle1" align="center">
                Фотография
            </Typography>
            {
                img && typeof(img) === "string"
                    ? <form onSubmit={formik.handleSubmit}>
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item xs={12} sm className={classes.colPreview}>
                                <PreviewPhoto src={img}/>
                            </Grid>
                            <Grid item xs={12} sm className={classes.colButton}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Обновить фото
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    : <Grid container justify="flex-end">
                        <Grid item>
                            <UploadButton body="Выбрать новое фото" name="photo" onChange={handleChangePhoto}/>
                        </Grid>
                    </Grid>
            }
        </Paper>
    )
}