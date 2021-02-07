import {FC} from "react"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import { useSelector } from "react-redux"
import { GlobalState } from "../../redux/store"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        media: {
            height: "200px",
            "@media (max-width:450px)": {
                height: "250px"
            },
            "@media (max-width:350px)": {
                backgroundPosition: "top"
            }
        }
    })
)

export const ProfilePhoto: FC = () => {
    const classes = useStyles()
    const src = useSelector((state: GlobalState) => state.profileReducer.profile?.photo)

    return (
        <Card>
            <CardMedia
                className={classes.media}
                image={src || "https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png"}
            />
        </Card>
    )
}