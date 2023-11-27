import {Outlet} from 'react-router-dom'
import {Header} from "components/header/header";
import React from "react";
import {Footer} from "components/footer/footer";


export const Layout = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
