import {useEffect} from "react";        // necessary imports
import {login} from "../services/api.service.ts";

export const LoginPage = () => {
    useEffect(() => { // auto-login once when the page mounts
        login({     // logging in with registered user credentials
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        });
    }, []);

    return (
        <>
            login Page
        </>
    );
};