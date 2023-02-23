import {BlockConfig} from '@pancodex/sdk-lib';
import {StringSelectsKeys, TextConstantsKeys} from '../keyValues';

export const headerBlock: BlockConfig<StringSelectsKeys, TextConstantsKeys> = {
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
