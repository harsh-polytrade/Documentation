module.exports = {
    title: 'Documentation',
    description: 'Just playing around',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Lender Portal Contract', link: '/lender-portal-contract/' },
          { text: 'Client Portal Contract', link: '/client-portal-contract/' },
          { text: 'Visit Website', link: 'https://polytrade.finance/' },
        ],
        sidebar: {

            '/lender-portal-contract/': [
                '',
                'ILenderPool',
                'Lender Pool',
                'More Informations'
               
            ],
            '/client-portal-contract/': [
                '',
                'Interface Offer',
                'Interface Pricing Table',
                'Offer',
                'Pricing Table',
                'More Informations'
               
            ],

        }
    }
 }