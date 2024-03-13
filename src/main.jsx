import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Body from './components/Body.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx';
import Services from './components/Services.jsx';
import RestaurantMenu from './components/RestaurantMenu.jsx';
import Profile from './components/Profile.jsx';
import MenuHeaderShimmer from './components/MenuHeaderShimmer.jsx';
import Cart from './components/Cart.jsx';

import './index.css'

const Instamart = lazy(() => import("./components/Instamart.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />
          }
        ]
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<MenuHeaderShimmer />}>
            <Instamart />
          </Suspense>
        )
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
