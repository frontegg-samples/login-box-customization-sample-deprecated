import React, {useState} from 'react';
import './App.css';
import {Action, Fab} from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import {FaBeer, FaPaintBrush, FaQuestion} from 'react-icons/fa';

import NoCustomizationProvider from './options/0-no-customization';
import HeaderImageProvider from './options/1-customize-header-image';
import ChangeBackgroundProvider from './options/2-change-background';
import FlatLoginBoxProvider from './options/3-flat-login-box';
import SplitLayoutProvider from './options/4-split-layout'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {ChangeBackground, FlatLoginBox, HeaderImage, None, SplitLayout} from "./options/customization-option";
import { Header, Segment, Portal } from 'semantic-ui-react'




function loadProvider(option: string) {
    switch (option) {
        case HeaderImage:
            return <HeaderImageProvider />;
        case ChangeBackground:
            return <ChangeBackgroundProvider/>
        case FlatLoginBox:
            return <FlatLoginBoxProvider />
        case SplitLayout:
            return <SplitLayoutProvider />
        default:
            return <NoCustomizationProvider />;
    }
}

const customizationOptions = [{
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
}, {
    key: ChangeBackground,
    text: 'Change background image'
}, {
    key: FlatLoginBox,
    text: 'Flatten your login box'
}, {
    key: SplitLayout,
    text: 'Split layout mode'
}]

function App() {
    const [showPortal, setShowPortal] = useState(false);
    const customizationOption = localStorage.getItem('customizationOption') || None;
    const codeString = customizationOptions[0].snippet;

    console.log('showPortal = ', showPortal);
    const setCustomizationOption = (option: string) => {
        localStorage.setItem('customizationOption', option);
        window.location.href = 'http://localhost:3000/account/login';
    }

    return (
    <div className="App">
        <Fab alwaysShowTitle={true} icon={<FaPaintBrush />}>
            {customizationOptions.map((o) => {
                return <Action text={o.text} onClick={() => setCustomizationOption(o.key)}>
                    <FaBeer />
                </Action>
            })}
        </Fab>
        <Fab text={"Help"} style={{left: 24, bottom: 24}} icon={<FaQuestion />} onClick={() => setShowPortal(true)} />
        { loadProvider(customizationOption) }
        <Portal
            open={showPortal}
            closeOnTriggerClick
            openOnTriggerClick
            onClose={() => setShowPortal(false)}
        >
            <Segment>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {codeString}
                </SyntaxHighlighter>
            </Segment>
        </Portal>
    </div>
  );
}

export default App;
