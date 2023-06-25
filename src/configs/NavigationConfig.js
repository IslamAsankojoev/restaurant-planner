import { DashboardOutlined, TeamOutlined, ApartmentOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const dashBoardNavTree = [
  {
    key: 'dashboards',
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: 'sidenav.dashboard',
    icon: DashboardOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: 'dashboards-default',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: 'sidenav.dashboard.default',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'users-list',
        path: `${APP_PREFIX_PATH}/users/list`,
        title: 'Users',
        icon: TeamOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'planner',
        path: `${APP_PREFIX_PATH}/planner`,
        title: 'Planner',
        icon: ApartmentOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
