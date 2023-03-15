import {DataFieldConfig} from '@pancodex/sdk-lib';

export const robots: DataFieldConfig = {
    label: 'Meta Robots',
    indexNumber: 1,
    dataType: 'string',
    inputType: 'select',
    defaultValue: 'index',
    variants: [
        {
            label: 'Do not index page',
            value: 'noindex'
        },
        {
            label: 'Do index page',
            value: 'index',
        }
    ]
}