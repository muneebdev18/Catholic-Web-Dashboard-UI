import { Routes, Route, useMatch } from 'react-router-dom';
import Overview from './overview/Overview';
import User from './users/User';
import DashboardSidebar from '../../components/dashboardSidebar/DashboardSidebar';
import AdminManagement from './adminmanagement/AdminManagement';
import NotFound from './notFound/NotFound';
import Settings from './settings/Settings';
import Notifications from './notification/Notifications';

const Dashboard = () => {
    const isDashboardMatch = useMatch('/dashboard');
    const isUsersMatch = useMatch('/dashboard/users');
    const isAdminMatch = useMatch('/dashboard/adminmanagement');
    const isNotificationMatch = useMatch('/dashboard/notifications');
    const isSettingsMatch = useMatch('/dashboard/settings');

    // Sidebar should be visible only for these exact matches
  const isSidebarVisible = isDashboardMatch || isUsersMatch || isAdminMatch || isNotificationMatch || isSettingsMatch
    return (
        <div className='flex h-screen bg-[#E0D4C5] text-[#000000]'>
            <div className='fixed inset-0 -z-10'>
                {/* Updated Gradient Background */}
                <div className='absolute inset-0 bg-gradient-to-br from-[#A357C4] via-[#ECB202] to-[#1B6313] opacity-80' />
                <div className='absolute inset-0 backdrop-blur-sm' />
            </div>

            {/* Sidebar */}
           {isSidebarVisible &&  <DashboardSidebar />}

            <div className='flex-1 overflow-y-auto'>
                <Routes>
                    <Route path="/" element={<Overview />} />
                    <Route path="/users" element={<User />} />
                    <Route path="/adminmanagement" element={<AdminManagement />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
