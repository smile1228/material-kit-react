import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import fundFilled from '@iconify/icons-ant-design/fund-filled';
import calendar from '@iconify/icons-eva/calendar-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: '工时',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill),
    children: [
      {
        title: '工时分配',
        path: '/dashboard/allocation'
      },
      {
        title: '工时查询',
        path: '/dashboard/query'
      },
      {
        title: '工时概览',
        path: '/dashboard/overview'
      }
    ]
  },
  {
    title: '周报明细',
    path: '/dashboard/user',
    icon: getIcon(calendar)
  },
  {
    title: '项目进度',
    path: '/dashboard/products',
    icon: getIcon(fundFilled)
  },
  {
    title: '签到登记',
    path: '/dashboard/blog',
    icon: getIcon(fileTextFill)
  },
  {
    title: '工具',
    path: '/login',
    icon: getIcon(lockFill)
  },
  {
    title: '用户管理',
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon(lockFill)
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon(personAddFill)
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon(alertTriangleFill)
  }
];

export default sidebarConfig;
