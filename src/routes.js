import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';

// 新增的管理界面
import WorkTimeAllocation from './pages/WorkTimeAllocation';
import WorkTimeQuery from './pages/WorkTimeQuery';
import WorkTimeOverview from './pages/WorkTimeOverview';
import WeekReport from './pages/WeekReport';
import PrejectProgess from './pages/PrejectProgess';
import Sgin from './pages/Sgin';
import Users from './pages/Users';
import Tools from './pages/Tools';
import Profile from './pages/Profile';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'allocation', element: <WorkTimeAllocation /> },
        { path: 'query', element: <WorkTimeQuery /> },
        { path: 'overview', element: <WorkTimeOverview /> },
        { path: 'report', element: <WeekReport /> },
        { path: 'progess', element: <PrejectProgess /> },
        { path: 'sgin', element: <Sgin /> },
        { path: 'users', element: <Users /> },
        { path: 'profile', element: <Profile /> },
        { path: 'tools', element: <Tools /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { element: <Navigate to="/login" replace /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
