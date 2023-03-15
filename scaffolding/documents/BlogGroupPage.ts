import {DocumentConfig} from '@pancodex/sdk-lib';
import {thumbnailCardBlock} from '../blocks/thumbnailCardBlock';
import {navigationEntryBlock} from '../blocks/navigationEntryBlock';
import {headerBlock} from '../blocks/headerBlock';
import {paragraphBlock} from '../blocks/paragraphBlock';
import {description, robots, follow, twitterImage} from '../dataFields';
import {childrenListingBlock} from '../blocks/childrenListingBlock';
import {galleryBlock} from '../blocks/galleryBlock';

export const BlogGroupPage: DocumentConfig = {
    type: 'page',
    label: 'Blog Group',
    defaultTitle: 'Blog Group',
    defaultSlug: 'blog-group',
    description: 'Blog Group 2 page may serve a landing page for the group of some blog posts',
    dataFields: {
        description,
        robots,
        follow,
        twitterImage
    },
    documentAreas: {
        linkBlocks: {
            label: 'Link View',
            indexNumber: 0,
            blocks: {navigationEntryBlock},
        },
        cardBlocks: {
            label: 'Card View',
            indexNumber: 1,
            blocks: {thumbnailCardBlock},
        },
        bodyBlocks: {
            label: 'Body View',
            indexNumber: 2,
            blocks: {
                headerBlock,
                paragraphBlock,
                childrenListingBlock,
                galleryBlock
            }
        }
    },
    commonAreas: {}
};
