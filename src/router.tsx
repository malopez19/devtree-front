import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import AuthLayout from './layout/AuthLayout';

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="/auth/login" element={<Login />} />   
                <Route path="/auth/register" element={<Register />} />                
            </Route>
        </Routes>
    </BrowserRouter>
  );
}