import {BlockConfig} from '@pancodex/sdk-lib';

export const galleryBlock: BlockConfig = {
    isDefault: false,
    description: 'Gallery of selected documents',
    components: {
        childrenListingComponent: {
            indexNumber: 0,
            label: 'List all selected documents in the gallery',
            isArray: true,
            props: {
                list: {
                    indexNumber: 0,
                    type: 'DocumentsList',
                    fieldContent: {
                        selectionMode: 'selectDocuments'
                    }
                }
            }
        }
    }
};
