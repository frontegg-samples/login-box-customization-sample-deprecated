import {
    AddTermsAndConditions,
    ChangeBackground,
    FlatLoginBox,
    HeaderImage, SocialLoginsDivider,
    SocialLoginsLayout,
    SplitLayout,
    CustomizeInputs
} from "./options/customization-option";

import HeaderImageProvider from './options/1-customize-header-image';
import ChangeBackgroundProvider from './options/2-change-background';
import FlatLoginBoxProvider from './options/3-flat-login-box';
import SplitLayoutProvider from './options/4-split-layout';
import SocialLoginLayoutProvider from './options/5-social-logins-layout';
import SocialLoginsDividerProvider from './options/6-customize-social-logins-divider';
import TermsAndConditionsProvider from './options/7-add-terms-and-conditions-footer';
import CustomizeInputsProvider from './options/8-customize-inputs';

const customizationOptions = [
    {
    key: HeaderImage,
    text: 'Change header image',
    Provider: <HeaderImageProvider />,
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
        Provider: <ChangeBackgroundProvider />,
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
},
    {
        key: FlatLoginBox,
        text: 'Flatten your login box',
        Provider: <FlatLoginBoxProvider />,
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
},
    {
        key: SplitLayout,
        text: 'Split layout mode',
        Provider: <SplitLayoutProvider />,
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
},
    {
        key: SocialLoginsLayout,
        text: 'Split social login buttons',
        Provider: <SocialLoginLayoutProvider />,
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
    },
    {
        key: SocialLoginsDivider,
        text: 'Customize social logins divider',
        Provider: <SocialLoginsDividerProvider/>,
        snippet: `import React from "react";
import {FronteggProvider, ThemeOptions} from "@frontegg/react";
import contextOptions from './context-options';

// Replace this with your app logo 👇
const headerImage = 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg';

const socialLoginButtonColors = {
    color: '#2C3137',
    background: '#FFFFFF',
};

const socialLoginButtonProps = {
    background: '#FFFFFF',
    default: { ...socialLoginButtonColors },
    hover: { ...socialLoginButtonColors },
    selected: { ...socialLoginButtonColors },
};

const githubIcon = (
    <svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0)'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.81828 -5.36367e-05C6.86872 -0.00203513 4.98216 0.690322 3.4967 1.95295C2.01124 3.21557 1.02396 4.96594 0.711815 6.89035C0.399666 8.81477 0.783043 10.7875 1.79323 12.4549C2.80343 14.1223 4.37441 15.3755 6.22464 15.9899C6.63258 16.0654 6.78366 15.8086 6.78366 15.592C6.78366 15.3755 6.78366 14.8819 6.78366 14.197C4.50226 14.7006 4.01879 13.0991 4.01879 13.0991C3.86677 12.6027 3.54381 12.1763 3.10724 11.8954C2.36692 11.3918 3.16767 11.3918 3.16767 11.3918C3.42718 11.4285 3.67495 11.5237 3.89221 11.6703C4.10948 11.8169 4.29054 12.011 4.42168 12.2379C4.53312 12.44 4.68334 12.618 4.86376 12.7619C5.04417 12.9057 5.25122 13.0125 5.47301 13.0762C5.6948 13.1398 5.92698 13.159 6.15621 13.1327C6.38545 13.1064 6.60723 13.0351 6.80884 12.9228C6.84045 12.5085 7.01906 12.1192 7.31246 11.8249C5.48935 11.6185 3.5756 10.9134 3.5756 7.7708C3.56308 6.95644 3.86421 6.16845 4.41664 5.56998C4.17011 4.86198 4.19887 4.08715 4.49722 3.39938C4.49722 3.39938 5.18718 3.17779 6.75344 4.24042C8.0984 3.87115 9.51802 3.87115 10.863 4.24042C12.4292 3.17779 13.1142 3.39938 13.1142 3.39938C13.4156 4.08617 13.4462 4.86157 13.1998 5.56998C13.7522 6.16845 14.0533 6.95644 14.0408 7.7708C14.0408 10.9235 12.122 11.6134 10.2939 11.7998C10.4899 11.9968 10.6413 12.2337 10.7377 12.4944C10.8342 12.7551 10.8735 13.0334 10.8529 13.3106C10.8529 14.4085 10.8529 15.2949 10.8529 15.5618C10.8529 15.8287 10.999 16.0352 11.417 15.9597C13.2614 15.3395 14.8255 14.0843 15.8304 12.418C16.8353 10.7517 17.2156 8.78255 16.9034 6.86187C16.5913 4.94118 15.607 3.19384 14.1261 1.93149C12.6453 0.669142 10.7642 -0.0261144 8.81828 -0.0302734V-5.36367e-05Z'
                fill='#231E1B'
            />
        </g>
        <defs>
            <clipPath id='clip0'>
                <rect width='16.4079' height='16' fill='white' transform='translate(0.614258)' />
            </clipPath>
        </defs>
    </svg>
);
const googleIcon = (
    <svg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <mask id='mask0' maskUnits='userSpaceOnUse' x='0' y='0' width='17' height='16'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.2364 6.54545H8.78186V9.63636H13.0728C12.6728 11.6 11 12.7273 8.78186 12.7273C6.16368 12.7273 4.05459 10.6182 4.05459 8C4.05459 5.38182 6.16368 3.27273 8.78186 3.27273C9.90913 3.27273 10.9273 3.67273 11.7273 4.32727L14.0546 2C12.6364 0.763636 10.8182 0 8.78186 0C4.3455 0 0.78186 3.56364 0.78186 8C0.78186 12.4364 4.3455 16 8.78186 16C12.7819 16 16.4182 13.0909 16.4182 8C16.4182 7.52727 16.3455 7.01818 16.2364 6.54545Z'
                fill='white'
            />
        </mask>
        <g mask='url(#mask0)'>
            <path d='M0.0533447 12.7275V3.27295L6.23516 8.00022L0.0533447 12.7275Z' fill='#FBBC05' />
        </g>
        <mask id='mask1' maskUnits='userSpaceOnUse' x='0' y='0' width='17' height='16'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.2364 6.54545H8.78186V9.63636H13.0728C12.6728 11.6 11 12.7273 8.78186 12.7273C6.16368 12.7273 4.05459 10.6182 4.05459 8C4.05459 5.38182 6.16368 3.27273 8.78186 3.27273C9.90913 3.27273 10.9273 3.67273 11.7273 4.32727L14.0546 2C12.6364 0.763636 10.8182 0 8.78186 0C4.3455 0 0.78186 3.56364 0.78186 8C0.78186 12.4364 4.3455 16 8.78186 16C12.7819 16 16.4182 13.0909 16.4182 8C16.4182 7.52727 16.3455 7.01818 16.2364 6.54545Z'
                fill='white'
            />
        </mask>
        <g mask='url(#mask1)'>
            <path
                d='M0.0533447 3.27246L6.23516 7.99973L8.78062 5.78155L17.5079 4.36337V-0.727539H0.0533447V3.27246Z'
                fill='#EA4335'
            />
        </g>
        <mask id='mask2' maskUnits='userSpaceOnUse' x='0' y='0' width='17' height='16'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.2364 6.54545H8.78186V9.63636H13.0728C12.6728 11.6 11 12.7273 8.78186 12.7273C6.16368 12.7273 4.05459 10.6182 4.05459 8C4.05459 5.38182 6.16368 3.27273 8.78186 3.27273C9.90913 3.27273 10.9273 3.67273 11.7273 4.32727L14.0546 2C12.6364 0.763636 10.8182 0 8.78186 0C4.3455 0 0.78186 3.56364 0.78186 8C0.78186 12.4364 4.3455 16 8.78186 16C12.7819 16 16.4182 13.0909 16.4182 8C16.4182 7.52727 16.3455 7.01818 16.2364 6.54545Z'
                fill='white'
            />
        </mask>
        <g mask='url(#mask2)'>
            <path
                d='M0.0533447 12.727L10.9624 4.36337L13.8352 4.72701L17.5079 -0.727539V16.727H0.0533447V12.727Z'
                fill='#34A853'
            />
        </g>
        <mask id='mask3' maskUnits='userSpaceOnUse' x='0' y='0' width='17' height='16'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.2364 6.54545H8.78186V9.63636H13.0728C12.6728 11.6 11 12.7273 8.78186 12.7273C6.16368 12.7273 4.05459 10.6182 4.05459 8C4.05459 5.38182 6.16368 3.27273 8.78186 3.27273C9.90913 3.27273 10.9273 3.67273 11.7273 4.32727L14.0546 2C12.6364 0.763636 10.8182 0 8.78186 0C4.3455 0 0.78186 3.56364 0.78186 8C0.78186 12.4364 4.3455 16 8.78186 16C12.7819 16 16.4182 13.0909 16.4182 8C16.4182 7.52727 16.3455 7.01818 16.2364 6.54545Z'
                fill='white'
            />
        </mask>
        <g mask='url(#mask3)'>
            <path d='M17.5099 16.7275L6.23714 8.00022L4.78259 6.90931L17.5099 3.27295V16.7275Z' fill='#4285F4' />
        </g>
    </svg>
);
const microsoftIcon = (
    <svg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0)'>
            <path d='M7.92208 7.60256H0.319519V0H7.92208V7.60256Z' fill='#F1511B' />
            <path d='M16.3169 7.60256H8.71375V0H16.3163V7.60256H16.3169Z' fill='#80CC28' />
            <path d='M7.92208 16H0.319519V8.39746H7.92208V16Z' fill='#00ADEF' />
            <path d='M16.3169 16H8.71375V8.39746H16.3163V16H16.3169Z' fill='#FBBC09' />
        </g>
        <defs>
            <clipPath id='clip0'>
                <rect width='15.9974' height='16' fill='white' transform='translate(0.319519)' />
            </clipPath>
        </defs>
    </svg>
);

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
            width: '450px'
        }
    },
    loginBox: {
        customDivider: {
            customDivider: <CustomDivider text={'OR CONTINUE WITH'} />,
        },
        content: {
            githubText: 'Github',
            googleText: 'Google',
            microsoftText: 'Microsoft',
        },
        icons: {
            googleIcon,
            githubIcon,
            microsoftIcon
        }
    },
    socialLogins: {
        rowLayout: true,
        google: { ...socialLoginButtonProps },
        gitHub: { ...socialLoginButtonProps },
        microsoft: { ...socialLoginButtonProps },
        facebook: { ...socialLoginButtonProps },
    }
}

const Provider = () => (
    <FronteggProvider themeOptions={themeOptions} contextOptions={contextOptions} headerImage={headerImage}>
        <div />
    </FronteggProvider>
);

export default Provider;`
    },
    {
        key: AddTermsAndConditions,
        text: "Add terms and conditions footer",
        Provider: <TermsAndConditionsProvider />,
        snippet: `import React from "react";
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

export default Provider;`
    },
    {
        key: CustomizeInputs,
        text: 'Customize the styles of the inputs',
        Provider: <CustomizeInputsProvider />,
        snippet: `import React from "react";
import {FronteggProvider, ThemeOptions} from "@frontegg/react";

import contextOptions from './context-options';

const themeOptions: ThemeOptions = {
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    boxShadow: 'none',
                    border: 'transparent',
                    outlineStyle: 'none',
                    outlineColor: '#EDEEF0',
                    outlinedWith: '1px',
                    // '& $notchedOutline': {
                    //     outlineColor: '#EDEEF0',
                    //     outlinedWith: '1px',
                    //     border: 'none',
                    // },
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):focus, &:not(.Mui-disabled).Mui-focused, &:not(.Mui-disabled).Mui-hovered':
                    {
                        outlineWidth: '0px',
                        outlineStyle: 'none !important',
                        boxShadow: '0px 8px 16px rgba(54, 55, 60, 0.08), inset 4px 2px 4px rgba(36, 60, 76, 0.02)',
                    },
                },
                input: {
                    borderBottom: '1px solid gray'
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

export default Provider;`,
    }
]

export default customizationOptions;
