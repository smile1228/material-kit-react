import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import person from '@iconify/icons-eva/person-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import schedule from '@iconify/icons-ant-design/schedule-fill';
import fundFilled from '@iconify/icons-ant-design/fund-filled';
import calendar from '@iconify/icons-eva/calendar-fill';

// 暂未使用的图标文件
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: '我的',
    path: '/dashboard/profile',
    icon: getIcon(person)
  },
  {
    title: '工时',
    // path: '/dashboard/app',
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
    path: '/dashboard/report',
    icon: getIcon('ion:newspaper')
  },
  {
    title: '项目进度',
    path: '/dashboard/progess',
    icon: getIcon(fundFilled)
  },
  {
    title: '签到登记',
    path: '/dashboard/sgin',
    icon: getIcon(schedule)
  },
  {
    title: '用户管理',
    path: '/dashboard/users',
    icon: getIcon(peopleFill)
  },
  {
    title: '工具',
    path: '/dashboard/tools',
    icon: getIcon('si-glyph:tool-box')
  },
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'user',
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
