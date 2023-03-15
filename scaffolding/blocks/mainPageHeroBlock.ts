import {BlockConfig} from '@pancodex/sdk-lib';

export const mainPageHeroBlock: BlockConfig = {
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
        heroImage: {
            indexNumber: 2,
            label: 'Hero Image',
            props: {
                image: {
                    indexNumber: 0,
                    type: 'Image',
                    fieldContent: {

                    }
                }
            }
        },
        heroCta: {
            indexNumber: 3,
            label: 'Links for call to actions',
            isArray: true,
            props: {
                icon: {
                    indexNumber: 0,
                    type: 'Icon',
                    label: 'Icon',
                    fieldContent: {
                    },
                    fieldContentVariants: [
                        {
                            label: '01',
                            fieldContent: {
                                iconName: 'icon_1',
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">                                
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>                          
</svg>`
                            }
                        },
                        {
                            label: '02',
                            fieldContent: {
                                iconName: 'icon_2',
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-minus-fill" viewBox="0 0 16 16">
  <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1ZM6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1Z"/>
</svg>`
                            }
                        }
                    ]
                },
                label: {
                    indexNumber: 1,
                    type: 'StringValue',
                    label: 'Label',
                    fieldContent: {
                        value: 'Buy'
                    },
                    fieldContentVariants: [
                        {
                            label: 'Buy',
                            fieldContent: {
                                value: 'Buy'
                            }
                        },
                        {
                            label: 'Sell',
                            fieldContent: {
                                value: 'Sell'
                            }
                        }
                    ]
                },
                link: {
                    indexNumber: 2,
                    type: 'Link',
                    label: 'Action Link',
                    fieldContent: {
                        target: '_self'
                    }
                }
            }
        }
    }
};
