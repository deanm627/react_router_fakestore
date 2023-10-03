import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import Products, { loader as productLoader } from './routes/products';
import ProductDetail, { loader as productDetailLoader } from './routes/product-detail';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Products />,
        loader: productLoader,
      },
    ],
  },
  {
    path: "products/:productId",
    element: <ProductDetail />,
    errorElement: <ErrorPage />,
    loader: productDetailLoader
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
