import React, { useEffect } from 'react'
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate()
    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential)
        var userObj = jwtDecode(response.credential)

        localStorage.setItem("userDetails", JSON.stringify(userObj))
        navigate('/user-details')
    }
    useEffect(() => {
        google.accounts.id.initialize({
            /* global google */
            client_id: "437559816814-mh9qih1ot662v37t3bq66hct417rg260.apps.googleusercontent.com",
            callback: handleCallbackResponse,
        })
        google.accounts.id.renderButton(
            document.getElementById("singInDiv"),
            { theme: "outline", size: "large" }
        )
    }, [navigate,]);
    return (
        <div className="App">
            <div id='singInDiv'>

            </div>
        </div>
    )
}

export default Login