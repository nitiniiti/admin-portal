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
  {
    name: 'Gift Shop',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Show List',
        url: '/gift-list',
        icon: 'icon-cursor'
      },
      {
        name: 'Add Gift',
        url: '/create-gift',
        icon: 'icon-star'
      }
    ]
  },
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
    name: 'Monitoring',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Show Dashboard',
        url: '/monitoring',
        icon: 'icon-cursor'
      },
    ]
  }
];
