import React from 'react';
import {PageData, usePageData} from '@pancodex/bridge-lib';
import {usePageContentContext, PageContentContext} from './adapters';
import {MainPage} from './pages/MainPage';

export function Page() {
    const pageData: PageData = usePageData();
    console.log('Page Data: ', pageData);
    const pageContentContext: PageContentContext = usePageContentContext(pageData);
    if (pageContentContext.mainPageContent) {
        return <MainPage content={pageContentContext.mainPageContent} />
    } else if (pageContentContext.blogGroupPageContent) {
        return (
            <div>
                <h1>Test</h1>
                <code>
                    <pre>
                        {JSON.stringify(pageContentContext.blogGroupPageContent, null, 4)}
                    </pre>
                </code>
            </div>
        );
    }
    return null;
}
