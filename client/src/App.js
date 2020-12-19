import React from "react";
import Header from "./components/header/Header";

import "./app.sass";
import {useRoutes} from "./useRoutes";

function App() {
    const isAuth = true;
    const routes = useRoutes(isAuth);
    return (
        <>
            <Header/>
            {routes}
        </>
    );
}

export default App;
