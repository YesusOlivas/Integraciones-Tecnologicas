import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboards',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Inicio',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/Inicio/Dashboard']
                    }
                ]
            },
            {
                label: 'Menú',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Clientes',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/Inicio/Clientes']
                    },
                    {
                        label: 'Productos',
                        icon: 'pi pi-fw pi-box',
                        routerLink: ['/Inicio/Productos']
                    },
                    {
                        label: 'Facturac',
                        icon: 'pi pi-fw pi-shopping-cart',
                        routerLink: ['/Inicio/Facturacion']
                    },
                ]
            },
            {
                label: 'Apps',
                icon: 'pi pi-th-large',
                items: [
                    {
                        label: 'Blog',
                        icon: 'pi pi-fw pi-comment',
                        items: [
                            {
                                label: 'List',
                                icon: 'pi pi-fw pi-image',
                                routerLink: ['/Inicio/apps/blog/list']
                            },
                            {
                                label: 'Detail',
                                icon: 'pi pi-fw pi-list',
                                routerLink: ['/Inicio/apps/blog/detail']
                            },
                            {
                                label: 'Edit',
                                icon: 'pi pi-fw pi-pencil',
                                routerLink: ['/Inicio/apps/blog/edit']
                            }
                        ]
                    },
                    {
                        label: 'Calendar',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/Inicio/apps/calendar']
                    },
                    {
                        label: 'Chat',
                        icon: 'pi pi-fw pi-comments',
                        routerLink: ['/Inicio/apps/chat']
                    },
                    {
                        label: 'Files',
                        icon: 'pi pi-fw pi-folder',
                        routerLink: ['/Inicio/apps/files']
                    },
                    {
                        label: 'Kanban',
                        icon: 'pi pi-fw pi-sliders-v',
                        routerLink: ['/Inicio/apps/kanban']
                    },
                    {
                        label: 'Mail',
                        icon: 'pi pi-fw pi-envelope',
                        items: [
                            {
                                label: 'Inbox',
                                icon: 'pi pi-fw pi-inbox',
                                routerLink: ['/Inicio/apps/mail/inbox']
                            },
                            {
                                label: 'Compose',
                                icon: 'pi pi-fw pi-pencil',
                                routerLink: ['/Inicio/apps/mail/compose']
                            },
                            {
                                label: 'Detail',
                                icon: 'pi pi-fw pi-comment',
                                routerLink: ['/Inicio/apps/mail/detail/1000']
                            }
                        ]
                    },
                    {
                        label: 'Task List',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/Inicio/apps/tasklist']
                    }
                ]
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-fw pi-star-fill',
                items: [
                    {
                        label: 'Form Layout',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/Inicio/uikit/formlayout']
                    },
                    {
                        label: 'Input',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/Inicio/uikit/input']
                    },
                    {
                        label: 'Float Label',
                        icon: 'pi pi-fw pi-bookmark',
                        routerLink: ['/Inicio/uikit/floatlabel']
                    },
                    {
                        label: 'Invalid State',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/Inicio/uikit/invalidstate']
                    },
                    {
                        label: 'Button',
                        icon: 'pi pi-fw pi-box',
                        routerLink: ['/Inicio/uikit/button']
                    },
                    {
                        label: 'Table',
                        icon: 'pi pi-fw pi-table',
                        routerLink: ['/Inicio/uikit/table']
                    },
                    {
                        label: 'List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/Inicio/uikit/list']
                    },
                    {
                        label: 'Tree',
                        icon: 'pi pi-fw pi-share-alt',
                        routerLink: ['/Inicio/uikit/tree']
                    },
                    {
                        label: 'Panel',
                        icon: 'pi pi-fw pi-tablet',
                        routerLink: ['/Inicio/uikit/panel']
                    },
                    {
                        label: 'Overlay',
                        icon: 'pi pi-fw pi-clone',
                        routerLink: ['/Inicio/uikit/overlay']
                    },
                    {
                        label: 'Media',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['/Inicio/uikit/media']
                    },
                    {
                        label: 'Menu',
                        icon: 'pi pi-fw pi-bars',
                        routerLink: ['/Inicio/uikit/menu'],
                        routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' }
                    },
                    {
                        label: 'Message',
                        icon: 'pi pi-fw pi-comment',
                        routerLink: ['/Inicio/uikit/message']
                    },
                    {
                        label: 'File',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['/Inicio/uikit/file']
                    },
                    {
                        label: 'Chart',
                        icon: 'pi pi-fw pi-chart-bar',
                        routerLink: ['/Inicio/uikit/charts']
                    },
                    {
                        label: 'Misc',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/Inicio/uikit/misc']
                    }
                ]
            },
            {
                label: 'Prime Blocks',
                icon: 'pi pi-fw pi-prime',
                items: [
                    {
                        label: 'Free Blocks',
                        icon: 'pi pi-fw pi-eye',
                        routerLink: ['/Inicio/blocks']
                    },
                    {
                        label: 'All Blocks',
                        icon: 'pi pi-fw pi-globe',
                        url: ['https://www.primefaces.org/primeblocks-ng'],
                        target: '_blank'
                    }
                ]
            },
            {
                label: 'Utilities',
                icon: 'pi pi-fw pi-compass',
                items: [
                    {
                        label: 'PrimeIcons',
                        icon: 'pi pi-fw pi-prime',
                        routerLink: ['/Inicio/utilities/icons']
                    },
                    {
                        label: 'Colors',
                        icon: 'pi pi-fw pi-palette',
                        routerLink: ['/Inicio/utilities/colors']
                    },
                    {
                        label: 'PrimeFlex',
                        icon: 'pi pi-fw pi-desktop',
                        url: ['https://www.primefaces.org/primeflex/'],
                        target: '_blank'
                    },
                    {
                        label: 'Figma',
                        icon: 'pi pi-fw pi-pencil',
                        url: ['https://www.figma.com/file/zQOW0XBXdCTqODzEOqwBtt/Preview-%7C-Apollo-2022?node-id=335%3A21768&t=urYI89V3PLNAZEJG-1/'],
                        target: '_blank'
                    }
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/Inicio/landing']
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/Inicio/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/Inicio/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/Inicio/auth/access']
                            },
                            {
                                label: 'Register',
                                icon: 'pi pi-fw pi-user-plus',
                                routerLink: ['/Inicio/auth/register']
                            },
                            {
                                label: 'Forgot Password',
                                icon: 'pi pi-fw pi-question',
                                routerLink: ['/Inicio/auth/forgotpassword']
                            },
                            {
                                label: 'New Password',
                                icon: 'pi pi-fw pi-cog',
                                routerLink: ['/Inicio/auth/newpassword']
                            },
                            {
                                label: 'Verification',
                                icon: 'pi pi-fw pi-envelope',
                                routerLink: ['/Inicio/auth/verification']
                            },
                            {
                                label: 'Lock Screen',
                                icon: 'pi pi-fw pi-eye-slash',
                                routerLink: ['/Inicio/auth/lockscreen']
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/Inicio/pages/crud']
                    },
                    {
                        label: 'Timeline',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/Inicio/pages/timeline']
                    },
                    {
                        label: 'Invoice',
                        icon: 'pi pi-fw pi-dollar',
                        routerLink: ['/Inicio/pages/invoice']
                    },
                    {
                        label: 'About Us',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/Inicio/pages/aboutus']
                    },
                    {
                        label: 'Help',
                        icon: 'pi pi-fw pi-question-circle',
                        routerLink: ['/Inicio/pages/help']
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/Inicio/pages/notfound']
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/Inicio/pages/empty']
                    },
                    {
                        label: 'FAQ',
                        icon: 'pi pi-fw pi-question',
                        routerLink: ['/Inicio/pages/faq']
                    },
                    {
                        label: 'Contact Us',
                        icon: 'pi pi-fw pi-phone',
                        routerLink: ['/Inicio/pages/contact']
                    }
                ]
            },
            {
                label: 'E-Commerce',
                icon: 'pi pi-fw pi-wallet',
                items: [
                    {
                        label: 'Product Overview',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['/Inicio/ecommerce/product-overview']
                    },
                    {
                        label: 'Product List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/Inicio/ecommerce/product-list']
                    },
                    {
                        label: 'New Product',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['/Inicio/ecommerce/new-product']
                    },
                    {
                        label: 'Shopping Cart',
                        icon: 'pi pi-fw pi-shopping-cart',
                        routerLink: ['/Inicio/ecommerce/shopping-cart']
                    },
                    {
                        label: 'Checkout Form',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/Inicio/ecommerce/checkout-form']
                    },
                    {
                        label: 'Order History',
                        icon: 'pi pi-fw pi-history',
                        routerLink: ['/Inicio/ecommerce/order-history']
                    },
                    {
                        label: 'Order Summary',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['/Inicio/ecommerce/order-summary']
                    }
                ]
            },
            {
                label: 'User Management',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/Inicio/profile/list']
                    },
                    {
                        label: 'Create',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['/Inicio/profile/create']
                    }
                ]
            },
            {
                label: 'Hierarchy',
                icon: 'pi pi-fw pi-align-left',
                items: [
                    {
                        label: 'Submenu 1',
                        icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 1.1',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 1.1.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                    {
                                        label: 'Submenu 1.1.2',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                    {
                                        label: 'Submenu 1.1.3',
                                        icon: 'pi pi-fw pi-align-left',
                                    }
                                ]
                            },
                            {
                                label: 'Submenu 1.2',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 1.2.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: 'Submenu 2',
                        icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 2.1',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 2.1.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                    {
                                        label: 'Submenu 2.1.2',
                                        icon: 'pi pi-fw pi-align-left',
                                    }
                                ]
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 2.2.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Start',
                icon: 'pi pi-fw pi-download',
                items: [
                    {
                        label: 'Buy Now',
                        icon: 'pi pi-fw pi-shopping-cart',
                        url: ['https://www.primefaces.org/store']
                    },
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-info-circle',
                        routerLink: ['/documentation']
                    }
                ]
            }
        ];
    }
}
