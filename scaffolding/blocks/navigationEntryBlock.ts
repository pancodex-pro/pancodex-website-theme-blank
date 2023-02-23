import {BlockConfig} from '@pancodex/sdk-lib';
import {StringSelectsKeys, TextConstantsKeys} from '../keyValues';

export const navigationEntryBlock: BlockConfig<StringSelectsKeys, TextConstantsKeys> = {
    description: 'A menu option layout to display the page\'s link somewhere in the navigation',
    components: {
        entryDisplay: {
            indexNumber: 0,
            label: 'Navigation Entry Display',
            props: {
                image: {
                    indexNumber: 1,
                    label: 'Entry Image',
                    type: 'Image',
                    fieldContent: {
                        src: '',
                        alt: '',
                        width: 0,
                        height: 0
                    }
                },
                title: {
                    indexNumber: 0,
                    label: 'Entry Title',
                    type: 'HeaderText',
                    fieldContent: {
                        htmlText: '<h1>Entry Title</h1>'
                    }
                },
                text: {
                    indexNumber: 2,
                    label: 'Entry Text',
                    type: 'ParagraphText',
                    fieldContent: {
                        htmlText: '<p>Some text to describe the entry</p>'
                    }
                }
            }
        }
    }
}
