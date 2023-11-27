import React, {useEffect, useState} from 'react'
import {
    createBrowserRouter,
    Navigate,
    Outlet,
    RouteObject,
    RouterProvider,
} from 'react-router-dom'

import {Login} from "components/login/login";
import {PersonalAccount} from "components/personal-account/personal-account";
import {User} from "components/user/user";
import {Layout} from "components/layout/Layout";

const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Login/>,
    }
]

const router = createBrowserRouter([
    ...publicRoutes,
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                element: <PrivateRoutes/>,
                children: [
                    {
                        path: '/account',
                        element: <PersonalAccount />,
                    },
                    {
                        path: '/user',
                        element: <User />,
                    }
                ],
            },
        ],
    },
], {
    basename: '/monitor-systems',
})

export const Router = () => {
    return <RouterProvider router={router}/>
}

function PrivateRoutes() {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)

    useEffect(() => {
        fetch('http://localhost:3001/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    // setIsLoggedIn(false)
                    throw new Error('Unauthorized');
                }
                setIsLoggedIn(true)
                return response.json();
            })
            .catch((error) => {
                console.error('Authorization failed:', error.message);
            });
    }, [isLoggedIn]);


    return isLoggedIn ? <Outlet/> : <Navigate to="/login"/>
}
