import React from "react";
import {FronteggProvider, ThemeOptions} from "@frontegg/react";

import contextOptions from './context-options';
const themeOptions: ThemeOptions = {
    loginBox: {
        footer: (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: '30px',
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: '#36373C',
                }}>
                By continuing up I agree to Acme's{' '}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ color: '#36373C' }}
                    href={'https://acme.com/terms'}>
                    Terms of Service
                </a>{' '}
                and{' '}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ color: '#36373C' }}
                    href={'https://acme.com/policy'}>
                    Privacy Policy.
                </a>
            </div>
        ),
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


