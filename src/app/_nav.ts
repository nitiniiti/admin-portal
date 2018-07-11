export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  // {
  //   name: 'Gift Shop',
  //   url: '/base',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Show List',
  //       url: '/gift-list',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Add Gift',
  //       url: '/create-gift',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  {
    name: 'Event Management',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Show Events',
        url: '/show-events',
        icon: 'icon-cursor'
      },
      {
        name: 'Add Event',
        url: '/add-event',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Invite By SMS',
    url: '/invite-by-sms',
    icon: 'icon-puzzle',
  },
  {
    name: 'Invite By Email',
    url: '/invite-by-email',
    icon: 'icon-puzzle',
  },
  {
    name: 'Generate Invite Codes',
    url: '/invite-codes',
    icon: 'icon-puzzle',
  },
  // {
  //   name: 'Monitoring',
  //   url: '/base',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Show Dashboard',
  //       url: '/monitoring',
  //       icon: 'icon-cursor'
  //     },
  //   ]
  // }
];
