import {DocumentConfig} from '@pancodex/sdk-lib';
import {thumbnailCardBlock} from '../blocks/thumbnailCardBlock';
import {navigationEntryBlock} from '../blocks/navigationEntryBlock';
import {mainPageHeroBlock} from '../blocks/mainPageHeroBlock';
import {headerBlock} from '../blocks/headerBlock';
import {paragraphBlock} from '../blocks/paragraphBlock';
import {chapterBlock} from '../blocks/chapterBlock';
import {description, robots, follow} from '../dataFields';

export const MainPage: DocumentConfig = {
    type: 'main_page',
    label: 'Main Page',
    defaultTitle: 'Home',
    defaultSlug: 'home',
    description: 'Home page template for your site',
    dataFields: {
        description,
        robots,
        follow
    },
    documentAreas: {
        linkBlocks: {
            label: 'Link View',
            indexNumber: 0,
            blocks: {
                navigationEntryBlock,
            }
        },
        cardBlocks: {
            label: 'Card View',
            indexNumber: 1,
            blocks:
                {
                    thumbnailCardBlock,
                }
        },
        bodyBlocks: {
            label: 'Body View',
            indexNumber: 2,
            blocks:
                {
                    mainPageHeroBlock,
                    headerBlock,
                    paragraphBlock,
                    chapterBlock
                }
        }
    },
    commonAreas: {}
};
