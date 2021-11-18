import React, { useEffect, useRef, useState } from 'react';

const GoogleAuth = () => {
    const [isSignedIn, setIsSignedIn] = useState(null);
    const auth = useRef('');

    useEffect(() => {
        
        window.gapi.load('client:auth2', () => {
                window.gapi.client.init({
                clientId: '199249603038-3mqon0cjfda6kiumaok1rav0of90nud8.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                auth.current = window.gapi.auth2.getAuthInstance();
                setIsSignedIn(auth.current.isSignedIn.get());
                console.log(auth)
                auth.current.isSignedIn.listen(onAuthChange);
            });
        });
    }, []);

    const onAuthChange = () => {
        setIsSignedIn(auth.current.isSignedIn.get());
    };

    const onSignInClick = () => {
        auth.current.signIn();
    };

    const onSignOutClick = () => {
        auth.current.signOut();
    };

    const renderAuthButton = () => {
        if (isSignedIn === null) {
            return null;
        } else if (isSignedIn) {
            return (
                <button onClick={onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button> 
            );
        }
    };

    return(
        <div>{renderAuthButton()}</div>
    )
    
};

export default GoogleAuth;