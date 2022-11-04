import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Inventory from './components/Inventory/Inventory';
import Order from './components/Oders/Order';
import Shop from './components/Shop/Shop';
import Main from './layouts/Main';
import { productsAndCartLoader } from './loders/loders';
import Shipping from './components/Shipping/Shipping';
import PrivateRouters from './components/routes/PrivateRouters';



function App() {
  const router = createBrowserRouter([
    {

      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element : <Shop> </Shop>
        },
        {
          path: '/orders',
          loader:productsAndCartLoader,
          element : <Order></Order>
        },
        {
          path: '/inventory',
          element : <PrivateRouters><Inventory></Inventory></PrivateRouters>
        },
        {
          path: '/shipping',
          element : <PrivateRouters><Shipping></Shipping></PrivateRouters>
        },
        {
          path: '/about',
          element : <PrivateRouters><About></About></PrivateRouters>
        },
        {
          path: '/login',
          element : <Login></Login>
        },
        {
          path : '/signup',
          element : <Signup></Signup>
        }
      ]

    }
  ])
  return (
    <div >
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
