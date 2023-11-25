import React from 'react';
import './App.css';
import {Footer} from "components/footer/footer";
import {Header} from "components/header/header";
import {Login} from "components/login/login";
import {User} from "components/user/user";
import {PersonalAccount} from "components/personal-account/personal-account";

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<Login/>*/}
            {/*<User/>*/}
            <PersonalAccount />
            <Footer/>
        </div>
    );
}

export default App;
