import {ChangeBackground, FlatLoginBox, HeaderImage, SplitLayout} from "./options/customization-option";

const customizationOptions = [
    {
    key: HeaderImage,
    text: 'Change header image',
    snippet:
        `import React from 'react';
import {FronteggProvider} from '@frontegg/react';
import contextOptions from './context-options';
        
// Replace this with your app logo 👇
const headerImage = 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg';

const Provider = () => (
    <FronteggProvider contextOptions={contextOptions} headerImage={headerImage}>
        <div />
    </FronteggProvider>
);
        
export default Provider;`
},
    {
    key: ChangeBackground,
    text: 'Change background image',
    snippet: `import React from "react";
import {FronteggProvider} from "@frontegg/react";
import backgroundImage from '../assets/gradient';
import contextOptions from './context-options';

// Replace this with your app logo 👇
const headerImage = 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg';

const Provider = () => (
    <FronteggProvider backgroundImage={backgroundImage} contextOptions={contextOptions} headerImage={headerImage}>
        <div />
    </FronteggProvider>
);

export default Provider;`
}, {
    key: FlatLoginBox,
    text: 'Flatten your login box',
    snippet: `import React from "react";
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

export default Provider;`
}, {
    key: SplitLayout,
    text: 'Split layout mode',
    snippet: `import React from "react";
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

export default Provider;`
}]

export default customizationOptions;
