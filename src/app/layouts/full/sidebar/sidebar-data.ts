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
];
