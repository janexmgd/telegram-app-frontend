import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';

//import pages
import Login from '../pages/Login';
import Register from '../pages/Register';
import Chat from '../pages/Chat';

// eslint-disable-next-line no-unused-vars
const PrivateRoute = () => {
  const token = localStorage.getItem('token');
  const users = localStorage.getItem('user');
  if (token && users) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};
const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Chat />} />
        </Route>
        <Route path="/login">
          <Route index element={<Login />} />
        </Route>
        <Route path="/register">
          <Route index element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
