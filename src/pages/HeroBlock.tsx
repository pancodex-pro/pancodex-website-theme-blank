import React from 'react';
import {MainPage_MainPageHeroBlock} from '../adapters';

interface HeroBlockProps {
    data: MainPage_MainPageHeroBlock;
}

export function HeroBlock(props: HeroBlockProps) {
    const {data} = props;
    console.log('data.heroImage: ', data.heroImage);
    return (
        <div>
            <div className="flex justify-center w-full">
                <img className="w-1/2" src={data.heroImage.image.src} alt=""/>
            </div>
            <div dangerouslySetInnerHTML={{__html: data.heroHeader.text}}></div>
            <div dangerouslySetInnerHTML={{__html: data.heroText.text}}></div>
            <code>
                <pre>
                    {JSON.stringify(data, null, 4)}
                </pre>
            </code>
        </div>
    );
}
