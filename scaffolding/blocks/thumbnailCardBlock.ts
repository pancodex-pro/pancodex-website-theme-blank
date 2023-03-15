import {BlockConfig} from '@pancodex/sdk-lib';

export const thumbnailCardBlock: BlockConfig = {
    isDefault: true,
    description: 'A card layout to display the page\'s thumbnail',
    components: {
        thumbnailCardComponent: {
            indexNumber: 0,
            label: 'Thumbnail Card',
            props: {
                image: {
                    indexNumber: 0,
                    label: 'Card Image',
                    type: 'Image',
                    fieldContent: {
                        src: '',
                        alt: '',
                        width: 0,
                        height: 0,
                    }
                },
                title: {
                    indexNumber: 1,
                    label: 'Card Title',
                    type: 'HeaderText',
                    fieldContent: {
                        htmlText: '<h1>Card Title</h1>'
                    }
                },
                text: {
                    indexNumber: 2,
                    label: 'Card Text',
                    type: 'ParagraphText',
                    fieldContent: {
                        htmlText: '<h1>Card Title</h1>'
                    }
                }
            }
        }
    }
}