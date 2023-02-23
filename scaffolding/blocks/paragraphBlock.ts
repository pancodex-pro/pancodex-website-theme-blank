import {BlockConfig} from '@pancodex/sdk-lib';
import {StringSelectsKeys, TextConstantsKeys} from '../keyValues';

export const paragraphBlock: BlockConfig<StringSelectsKeys, TextConstantsKeys> = {
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
