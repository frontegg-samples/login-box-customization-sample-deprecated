import React from "react";
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

const themeOptions: ThemeOptions = {
    authPage: {
        loginBox: {
            width: '450px'
        }
    },
    loginBox: {
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

export default Provider;


