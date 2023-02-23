import {DocumentConfig} from '@pancodex/sdk-lib';
import {thumbnailCardBlock} from '../blocks/thumbnailCardBlock';
import {navigationEntryBlock} from '../blocks/navigationEntryBlock';
import {mainPageHeroBlock} from '../blocks/mainPageHeroBlock';
import {headerBlock} from '../blocks/headerBlock';
import {paragraphBlock} from '../blocks/paragraphBlock';
import {chapterBlock} from '../blocks/chapterBlock';
import {metaDataBlock} from '../blocks/metaDataBlock';
import {StringSelectsKeys, TextConstantsKeys} from '../keyValues';

export const MainPage: DocumentConfig<StringSelectsKeys, TextConstantsKeys> = {
    type: 'main_page',
    defaultTitle: 'Home',
    defaultSlug: 'home',
    description: 'Home page template for your site',
    metaBlocks: {
        metaDataBlock,
        thumbnailCardBlock,
        navigationEntryBlock,
    },
    bodyBlocks: {
        mainPageHeroBlock,
        headerBlock,
        paragraphBlock,
        chapterBlock
    }
};
