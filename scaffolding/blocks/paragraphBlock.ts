import {BlockConfig} from '@pancodex/sdk-lib';

export const paragraphBlock: BlockConfig = {
    description: 'A simple text paragraph',
    components: {
        paragraphComponent: {
            indexNumber: 0,
            label: 'Paragraph',
            props: {
                text: {
                    indexNumber: 0,
                    type: 'ParagraphText',
                    fieldContent: {
                        htmlText: '<p>Type the header here...</p>'
                    }
                }
            }
        }
    }
};
