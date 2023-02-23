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
    const {metaBlocks, title, bodyBlocks} = content;
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title key="pageTitle">{title}</title>
            </Head>
            {metaBlocks.map((metaBlockItem, index) => {
                if (metaBlockItem.metaDataBlock) {
                    return (
                        <MetaDataBlock key={`metaBlock_${index}`} metaDataBlock={metaBlockItem.metaDataBlock}/>
                    );
                }
            })}
            <Link href="#">Test Link</Link>
            {bodyBlocks.map((blockItem, index) => {
                if (blockItem.mainPageHeroBlock) {
                    return (
                        <HeroBlock key={`bodyBlock_${index}`} data={blockItem.mainPageHeroBlock}/>
                    );
                } else if (blockItem.headerBlock) {
                    return (
                        <div>
                            <code>
                                <pre>
                                    {JSON.stringify(blockItem.headerBlock, null, 4)}
                                </pre>
                            </code>
                        </div>
                    );
                } else if (blockItem.chapterBlock) {
                    return (
                        <div>
                            <h1 className="text-1xl text-amber-700">Chapter Block</h1>
                            <code>
                                <pre>
                                    {JSON.stringify(blockItem.chapterBlock, null, 4)}
                                </pre>
                            </code>
                        </div>
                    );
                }
            })}
        </>
    );
}
