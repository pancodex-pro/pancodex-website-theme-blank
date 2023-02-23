import React from 'react';
import {MainPage_MainPageHeroBlock} from '../adapters';

interface HeroBlockProps {
    data: MainPage_MainPageHeroBlock;
}

export function HeroBlock(props: HeroBlockProps) {
    const {data} = props;
    return (
        <div>
            <code>
                <pre>
                    {JSON.stringify(data, null, 4)}
                </pre>
            </code>
        </div>
    );
}
