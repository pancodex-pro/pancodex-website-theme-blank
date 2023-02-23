import {StringSelectsConfig} from '@pancodex/sdk-lib';

export const stringSelects = {
    metaRobots: [
        {
            label: 'Do not index page',
            value: 'noindex'
        },
        {
            label: 'Do index page',
            value: 'index',
        }
    ],
    metaFollow: [
        {
            label: 'Do not follow page',
            value: 'nofollow'
        },
        {
            label: 'Do follow page',
            value: 'follow'
        }
    ],
    icons: [
        {
            label: 'Icon #1',
            value: 'icon_1',
            icon: '<svg></svg>'
        },
        {
            label: 'Icon #2',
            value: 'icon_2',
            icon: '<svg></svg>'
        }
    ]
} satisfies StringSelectsConfig;
