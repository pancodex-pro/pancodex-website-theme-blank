import {BlockConfig} from '@pancodex/sdk-lib';
import {StringSelectsKeys, TextConstantsKeys} from '../keyValues';

export const chapterBlock: BlockConfig<StringSelectsKeys, TextConstantsKeys> = {
    description: 'A chapter of the article with header and paragraphs',
        components: {
        headerComponent: {
            indexNumber: 0,
                label: 'Chapter Header',
                props: {
                text: {
                    indexNumber: 0,
                        type: 'HeaderText',
                        fieldContent: {
                        htmlText: '<h1>Chapter Name</h1>'
                    }
                }
            }
        },
        paragraphComponent: {
            indexNumber: 1,
                label: 'Chapter Paragraphs',
                isArray: true,
                props: {
                text: {
                    indexNumber: 0,
                        type: 'ParagraphText',
                        fieldContent: {
                        htmlText: '<p>Some chapter paragraph....</p>'
                    }
                }
            }
        }
    }
};
