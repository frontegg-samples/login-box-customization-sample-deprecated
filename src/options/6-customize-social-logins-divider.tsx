import React from "react";
import {FronteggProvider, ThemeOptions} from "@frontegg/react";
import contextOptions from './context-options';

// Replace this with your app logo 👇
const headerImage = 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg';

const DividerLine = () => (
    <div
        style={{
            height: '1px',
            backgroundColor: '#BFBFBF',
            alignSelf: 'center',
            display: 'flex',
            width: '100%',
        }}
    />
);

const DividerWrapper = ({ children }: any) => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        {children}
    </div>
);
const DividerText = ({ text }: { text: string }) => (
    <div
        style={{
            color: '#616166',
            fontSize: '10px',
            lineHeight: '16px',
            width: 'inherit',
            textAlign: 'center',
            alignSelf: 'center',
            marginBottom: '24px',
            marginTop: '24px',
        }}>
        {text}
    </div>
);

const CustomDivider = ({ text }: { text: string }) => (
    <DividerWrapper>
        <DividerLine />
        <DividerText text={text} />
        <DividerLine />
    </DividerWrapper>
);

const themeOptions: ThemeOptions = {
    authPage: {
        loginBox: {
            width: '450px',
        }
    },
    loginBox: {
        login: {
            customDivider: <CustomDivider text={'OR CONTINUE WITH'} />,
        },
    }
}

const Provider = () => (
    <FronteggProvider themeOptions={themeOptions} contextOptions={contextOptions} headerImage={headerImage}>
        <div />
    </FronteggProvider>
);

export default Provider;


