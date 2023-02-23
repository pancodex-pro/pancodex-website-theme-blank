import {BlockConfig} from '@pancodex/sdk-lib';
import {StringSelectsKeys, TextConstantsKeys} from '../keyValues';

export const mainPageHeroBlock: BlockConfig<StringSelectsKeys, TextConstantsKeys> = {
    description: 'Representative section of the page with background image and multiple call to action buttons.',
    isDefault: true,
    components: {
        heroHeader: {
            indexNumber: 0,
            label: 'Hero Header',
            props: {
                text: {
                    indexNumber: 0,
                    type: 'HeaderText',
                    fieldContent: {
                        htmlText: '<h1>The hero stunning text...</h1>'
                    }
                }
            }
        },
        heroText: {
            indexNumber: 1,
            label: 'Hero Subheader',
            props: {
                text: {
                    indexNumber: 0,
                    type: 'ParagraphText',
                    fieldContent: {
                        htmlText: '<p>Some short description...</p>'
                    }
                }
            }
        },
        heroCta: {
            indexNumber: 2,
            label: 'Call to actions',
            isArray: true,
            props: {
                icon: {
                    indexNumber: 0,
                    type: 'StringValue',
                    label: 'Icon',
                    stringSelectKey: 'icons',
                    fieldContent: {
                        value: 'icon_1'
                    }
                },
                label: {
                    indexNumber: 1,
                    type: 'StringValue',
                    label: 'Label',
                    fieldContent: {
                        value: 'Buy'
                    }
                },
                link: {
                    indexNumber: 2,
                    type: 'Link',
                    label: 'Action Link',
                    fieldContent: {}
                }
            }
        }
    }
};
