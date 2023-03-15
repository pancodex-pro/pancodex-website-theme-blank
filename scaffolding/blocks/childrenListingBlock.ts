import {BlockConfig} from '@pancodex/sdk-lib';

export const childrenListingBlock: BlockConfig = {
    isDefault: false,
    description: 'List children of the selected parent',
    components: {
        childrenListingComponent: {
            indexNumber: 0,
            label: 'List all children of the selected parents',
            props: {
                list: {
                    indexNumber: 0,
                    type: 'DocumentsList',
                    fieldContent: {
                        selectionMode: 'selectChildrenDocuments'
                    }
                }
            }
        }
    }
};
