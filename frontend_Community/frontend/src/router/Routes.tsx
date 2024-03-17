import {Route, Routes as Router} from "react-router-dom";

import Login from "../Login";
import Register from "../Register";
import App from "../App";
import React from "react";

const Routes = (props) => {
    return (
        <Router>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<App />} />
        </Router>
    );
}

export default Routes;
