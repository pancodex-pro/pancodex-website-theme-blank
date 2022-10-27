import React from 'react';
import {usePageData, PageData} from '@pancodex/pancodex-website-api';

export function Page() {
    const pageData: PageData = usePageData();
    return (
        <div>
            <p className="p-4 font-bold bg-blue-500">Some Title 12</p>
            <p className="p-4 font-bold bg-blue-500">Some Title 15</p>
            <code>
                <pre>
                    {JSON.stringify(pageData, null, 4)}
                </pre>
            </code>
        </div>
    );
}