import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CheckOut from './components/UI/CheckOut'
import Navbar from './components/UI/Navbar'
import ItemDetails from './components/UI/ItemDetails'
import ShopContainer from './components/UI/ShopContainer'
import { total } from './redux/reducers/cartSlice'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

const Layout = () => {
  const { isOpen } = useSelector((state) => state.checkout);
  return (
    <div>
      <Navbar />
      {isOpen && <CheckOut />}
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ShopContainer />
      },
      {
        path: "/ItemDetails/:id",
        element: <ItemDetails />,
      }
    ]
  }
]);

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(total());
  }, [cartItems]);

  return (
    <div className='font-BeVietnamPro'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;