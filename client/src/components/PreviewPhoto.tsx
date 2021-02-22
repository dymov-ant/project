import React, {FC} from "react"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
    preview: {
        display: "inline-block",
        width: "130px",
        height: "130px",
        objectFit: "cover",
        boxShadow: "0 0 5px",
        "@media (max-width:600px)": {
            width: "230px",
            height: "230px",
        }
    }
}))

interface IPreviewPhotoProps {
    src: string
}

export const PreviewPhoto: FC<IPreviewPhotoProps> = ({ src }) => {
    const classes = useStyles()

    return (
        <img src={src} alt="Новое фото" className={classes.preview}/>
    )
}