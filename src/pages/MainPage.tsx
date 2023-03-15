import React from 'react';
import {Head, Link} from '@pancodex/platform-lib';
import {MainPageContent} from '../adapters';
import {MetaDataBlock} from './MetaDataBlock';
import {HeroBlock} from './HeroBlock';

interface MainPageProps {
    content: MainPageContent;
}

export function MainPage(props: MainPageProps) {
    const {content} = props;
    const {dataFields, title, documentAreas} = content;
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title key="pageTitle">{title}</title>
            </Head>
            <MetaDataBlock dataFields={dataFields} />
            {documentAreas.bodyBlocks.map((blockItem, index) => {
                if (blockItem.mainPageHeroBlock) {
                    return (
                        <HeroBlock key={`bodyBlock_${index}`} data={blockItem.mainPageHeroBlock}/>
                    );
                } else if (blockItem.headerBlock) {
                    return (
                        <div key="headerBlock">
                            <code>
                                <pre>
                                    {JSON.stringify(blockItem.headerBlock, null, 4)}
                                </pre>
                            </code>
                        </div>
                    );
                } else if (blockItem.chapterBlock) {
                    return (
                        <div key="chapterBlock">
                            <h1 className="text-1xl text-amber-700">Chapter Block</h1>
                            <code>
                                <pre>
                                    {JSON.stringify(blockItem.chapterBlock, null, 4)}
                                </pre>
                            </code>
                        </div>
                    );
                } else if (blockItem.paragraphBlock) {
                    return (
                        <div key="chapterBlock">
                            <h1 className="text-1xl text-amber-700">Paragraph Block</h1>
                            <code>
                                <pre>
                                    {JSON.stringify(blockItem.paragraphBlock, null, 4)}
                                </pre>
                            </code>
                        </div>
                    );
                }
            })}
        </>
    );
}
