import React from "react";
import {FronteggProvider, ThemeOptions} from "@frontegg/react";
import contextOptions from './context-options';

// Replace this with your app logo 👇
const headerImage = 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg';

const themeOptions: ThemeOptions = {
    loginBox: {
        layout: {
            width: '50%',
            outerCustomBackground: <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%',
                backgroundColor: '#111536',
                position: 'absolute',
                right: '0',
                top: '0',
                height: '100%',
            }}><img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80"
                    alt="Hackers"/></div>
        },
    }
}

const Provider = () => (
    <FronteggProvider themeOptions={themeOptions} contextOptions={contextOptions} headerImage={headerImage}>
        <div />
    </FronteggProvider>
);

export default Provider;


