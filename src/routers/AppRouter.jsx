import { Routes, Route } from 'react-router-dom';

import Signup from '../pages/Auth/Signup';
import LoginPage from '../pages/Auth/LoginPage';
import Home from '../pages/Home';
import About from '../pages/About';

import AuthLayout from '../Layout/AuthLayout';
import MainLayout from '../Layout/MainLayout';
import ShoppingPage from '../pages/ShoppingPage';

const AppRouter = () => {
  return (
    <Routes>
      {/* Auth layout */}
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      {/* Main layout */}
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='shoppingPage' element={<ShoppingPage/>}/>
       
      </Route>
    </Routes>
  );
};

export default AppRouter;
