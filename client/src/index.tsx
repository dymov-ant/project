import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import store from "./redux/store"
import {App} from "./App"
import {CssBaseline} from "@material-ui/core"
import DateFnsUtils from "@date-io/date-fns"
import ruLocale from "date-fns/locale/ru"
import {MuiPickersUtilsProvider} from "@material-ui/pickers"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                    <CssBaseline/>
                    <App/>
                </MuiPickersUtilsProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)

reportWebVitals()
