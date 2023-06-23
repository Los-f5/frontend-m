import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Principal',
  },
  {
    displayName: 'Perfil',
    iconName: 'user-circle',
    route: '/ui-components/badge',
  },

  
  {
    navCap: 'General',
  },
  
  {
    displayName: 'Estadistica',
    iconName: 'chart-arrows-vertical',
    route: '/dashboard',
  },

  {
    displayName: 'Agregar Clientes',
    iconName: 'users-plus',
    route: '/ui-components/lists',
  },

  {
    displayName: 'Vuelos Agendados',
    iconName: 'calendar-stats',
    route: '/ui-components/chips',
  },
  
  {
    displayName: 'Vuelos Realizados',
    iconName: 'calendar-bolt',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Descuentos',
    iconName: 'tooltip',
    route: '/ui-components/tooltips',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication/register',
  },
  {
    navCap: 'Extra',
  },
  {
    displayName: 'Icons',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'aperture',
    route: '/extra/sample-page',
  },
];
