import {FC} from "react"
import {InfoSettings} from "../components/settings/InfoSettings"
import {PhotoSettings} from "../components/settings/PhotoSettings"
import {PasswordSettings} from "../components/settings/PasswordSettings"

export const SettingsPage: FC = () => {
    return (
        <div>
            <InfoSettings/>
            <PhotoSettings/>
            <PasswordSettings/>
        </div>
    )
}