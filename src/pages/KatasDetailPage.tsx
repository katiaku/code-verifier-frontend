import React, { useEffect } from "react";

import { useNavigate, useParams} from 'react-router-dom';
import { useSessionStorage } from "../hooks/useSessionStorage";

export const KatasDetailPage = () => {

    let loggedIn = useSessionStorage('sessionJWTToken');
    let navigate = useNavigate();
    // Finf id from params
    let { id } = useParams();

    useEffect(() => {
        if(!loggedIn) {
            return navigate('/login')
        }
    }, [loggedIn]);


    return (
        <div>
            <h1>
                Kata Detail Page: { id }
            </h1>
        </div>
    )
}
