import {BlockConfig} from '@pancodex/sdk-lib';

export const headerBlock: BlockConfig = {
    isDefault: true,
    description: 'A simple text header',
    components: {
        headerComponent: {
            indexNumber: 0,
            label: 'Header',
            props: {
                text: {
                    indexNumber: 0,
                    type: 'HeaderText',
                    fieldContent: {
                        htmlText: '<h1>Type the header here...</h1>'
                    }
                }
            }
        }
    }
};
