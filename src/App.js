import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Asset/Css/Custom.css'
import 'aos/dist/aos.css';

import { HashRouter} from "react-router-dom";
import AppRoute from "./AllRoute/AppRoute";

function App(props) {
    return (
        <>
            <HashRouter>
                <AppRoute/>
            </HashRouter>
        </>
    );
}

export default App;