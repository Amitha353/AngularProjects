import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'columns',
        route: '/authenticated/dashboard',
        submenu: null
    },
    {
        text: 'Countries',
        icon: 'globe',
        route: null,//'/countries',
        submenu: [
            {
                text: 'Select',
                icon: 'glyphicon-expand',
                route: null,
                submenu: [
                    {
                        text: 'USA',
                        icon: 'flag checkered',
                        route: '/authenticated/country-detail/USA',
                        submenu: null
                    },
                    {
                        text: 'India',
                        icon: 'flag checkered',
                        route: '/authenticated/country-detail/India',
                        submenu: null
                    },
                    {
                        text: 'Switzerland',
                        icon: 'flag checkered',
                        route: '/authenticated/country-detail/Switzerland',
                        submenu: null
                    }
                ]
            },
            {
                text: 'Top 3',
                icon: 'flag',
                route: '/authenticated/country-list/3',
                submenu: null
            },
            {
                text: 'Top 10',
                icon: 'flag',
                route: '/authenticated/country-list/10',
                submenu: null
            },
            {
                text: 'All',
                icon: 'flag',
                route: '/authenticated/country-list/0',
                submenu: null
            }
        ],
    },
    {
        text: 'Maintenance',
        icon: 'shield alternate',
        route: null,//'/settings',
        submenu: [
            {
                text: 'Countries',
                icon: 'th list',
                route: '/authenticated/country-maint',
                submenu: null
            },
            {
                text: 'Settings',
                icon: 'cog',
                route: '/authenticated/settings',
                submenu: null
            }
        ]
    }
];