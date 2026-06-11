import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import AuthLayout from './layout/AuthLayout';
import AppLayout from './layout/AppLayout';
import LinkTreeView from './views/LinkTreeView';
import Profile from './views/Profile';

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="/auth/login" element={<Login />} />   
                <Route path="/auth/register" element={<Register />} />                
            </Route>

            <Route path="/admin" element={<AppLayout />}>
              <Route index={true} element={<LinkTreeView />} />
              <Route path="profile" element={<Profile />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}