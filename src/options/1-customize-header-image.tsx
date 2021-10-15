import React from 'react';
import {FronteggProvider} from '@frontegg/react';
import contextOptions from './context-options';

// Replace this with your app logo 👇
const headerImage = 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg';

const Provider = () => (
    <FronteggProvider contextOptions={contextOptions} headerImage={headerImage}>
        <div />
    </FronteggProvider>
);

export default Provider;


