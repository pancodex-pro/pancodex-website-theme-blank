import React from 'react';
import {Head} from '@pancodex/platform-lib';
import {MainPage_DataFields} from '../adapters';

interface MetaDataProps {
    dataFields: MainPage_DataFields;
}

export function MetaDataBlock(props: MetaDataProps) {
    const {dataFields} = props;
    const {description, follow, robots} = dataFields;
    return (
        <Head>
            <meta name="description" content={description?.value as string}/>
            {/* Open Graph Data */}
            <meta property="og:description" content={description?.value} />
            {/*<meta property="og:locale" content={locale as string}/>*/}
            {/*<meta property="og:locale:alternate" content={locale} />*/}
            {/*<meta property="og:locale:alternate" content={locale} />*/}
            {/*<meta property="og:locale:alternate" content={locale} />*/}
            {/*<meta property="og:locale:alternate" content={locale} />*/}
            {/* Twitter summary card */}
            {/*<meta name="twitter:card" content={pageData.twitterCard.card}/>*/}
            {/*<meta name="twitter:title" content={title as string}/>*/}
            {/*<meta name="twitter:description" content={description as string}/>*/}
            {/*<meta name="twitter:image" content={pageData.twitterCard.image as string}/>*/}
        </Head>
    );
}