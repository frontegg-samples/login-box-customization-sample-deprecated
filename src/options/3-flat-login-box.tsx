import React from "react";
import {FronteggProvider, ThemeOptions} from "@frontegg/react";

import contextOptions from './context-options';
const themeOptions: ThemeOptions = {
    authPage: {
        loginBox: {
            backgroundCard: 'transparent',
            boxShadow: 'none',
            width: '440px',
        }
    }
}

// Replace this with your app logo 👇
const headerImage = 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg';

const Provider = () => (
    <FronteggProvider themeOptions={themeOptions} contextOptions={contextOptions} headerImage={headerImage}>
        <div />
    </FronteggProvider>
);

export default Provider;


