import React from "react";
import {FronteggProvider, ThemeOptions} from "@frontegg/react";

import contextOptions from './context-options';

const themeOptions: ThemeOptions = {
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        boxShadow: 'none',
                        border: 'transparent',
                    },
                    borderRadius: '8px',
                    boxShadow: 'none',
                    border: 'transparent',
                    outlineColor: '#EDEEF0',
                    outlinedWith: '1px',
                    '& $notchedOutline': {
                        outlineColor: '#EDEEF0',
                        outlinedWith: '1px',
                        border: 'none',
                    },
                },
                input: {
                    borderBottom: '1px solid gray',
                }
            },
        },
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


