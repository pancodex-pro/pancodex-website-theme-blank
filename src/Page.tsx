import React from 'react';
import {PageData, usePageData} from '@pancodex/bridge-lib';
import {usePageContentContext, PageContentContext} from './adapters';
import {MainPage} from './pages/MainPage';

export function Page() {
    const pageData: PageData = usePageData();
    const pageContentContext: PageContentContext = usePageContentContext(pageData);
    if (pageContentContext.mainPageContent) {
        return <MainPage content={pageContentContext.mainPageContent} />
    }
    return null;
}
