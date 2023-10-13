import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, {loader as rootLoader} from './routes/root';
import ErrorPage from './error-page';
import Products, { loader as productLoader } from './routes/products';
import ProductDetail, { loader as productDetailLoader } from './routes/product-detail';
import ProductsByCat, { loader as productCatLoader } from './routes/products-by-cat';
import { CartProvider } from './context/cart';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productLoader,
      },
      {
        path: 'category/:category',
        element: <ProductsByCat />,
        loader: productCatLoader,
      },
      {
        path: "products/:productId",
        element: <ProductDetail />,
        errorElement: <ErrorPage />,
        loader: productDetailLoader
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
