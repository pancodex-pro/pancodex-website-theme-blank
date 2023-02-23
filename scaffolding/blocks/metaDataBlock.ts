import {BlockConfig} from '@pancodex/sdk-lib';
import {StringSelectsKeys, TextConstantsKeys} from '../keyValues';

export const metaDataBlock: BlockConfig<StringSelectsKeys, TextConstantsKeys> = { // *** block name
    isDefault: true, // this block should be included into a default template of the parent document
    description: 'SEO meta data', // what the user will see when he is selecting a block to add to the page
    components: { // the list of the components in this particular block
        requiredMetaData: { // *** component name
            indexNumber: 0,
            label: 'Required Meta Data', // what the user will see on the page editor UI
            props: {
                description: { // *** property name
                    indexNumber: 0,
                    label: 'Page Description', // input control label
                    type: 'StringValue', // property type
                    fieldContent: { // property initial value
                        value: 'Page Description Text'
                    }
                },
                robots: {
                    indexNumber: 1,
                    type: 'StringValue',
                    label: 'Robots',
                    stringSelectKey: 'metaRobots',
                    fieldContent: {
                        value: 'index'
                    }
                },
                follow: {
                    indexNumber: 2,
                    type: 'StringValue',
                    label: 'Follow',
                    stringSelectKey: 'metaFollow',
                    fieldContent: {
                        value: 'follow'
                    }
                }
            }
        }
    }
};
