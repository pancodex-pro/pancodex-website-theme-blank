import React from 'react';
import {
    usePageData,
    PageData,
    NavigationItem,
    HeroContentSection,
    HeroContentSection_Header
} from '@pancodex/bridge';
import {Link} from '@pancodex/platform';

export function HeaderSection({htmlText}: {htmlText: string}) {
    return (
        <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{__html: htmlText}} />
    );
}

export function RootPage() {
    const pageData: PageData | null = usePageData();

    if (pageData) {
        const {navigation: {siteNavigation, pageNavigation, topLevelNavigation}, content: {hero, body}, title} = pageData;

        return (
            <div>
                <p className="p-4 font-bold bg-blue-600 text-blue-100 font-light">{title}</p>
                <div className="p-4 flex flex-row">
                    {topLevelNavigation.map((menuItem: NavigationItem) => {
                        return (
                            <div key={menuItem.id} className="px-3">
                                <Link href={menuItem.url}>{menuItem.title}</Link>
                            </div>
                        );
                    })}
                </div>
                {hero.map((heroItem: HeroContentSection) => {
                    if (heroItem.type === 'HEADER') {
                        return (
                            <HeaderSection key={heroItem.id} htmlText={(heroItem as HeroContentSection_Header).htmlText}/>
                        );
                    } else {
                        return (
                            <code key={heroItem.id}>
                                <pre>
                                    {JSON.stringify(heroItem, null, 4)}
                                </pre>
                            </code>
                        );
                    }
                })}
                <div className="p-4">
                    <code>
                    <pre>
                        {JSON.stringify(siteNavigation, null, 4)}
                    </pre>
                    </code>
                </div>
                <div className="p-4">
                    <code>
                    <pre>
                        {JSON.stringify(pageNavigation, null, 4)}
                    </pre>
                    </code>
                </div>
            </div>
        );
    }
    return null;
}
