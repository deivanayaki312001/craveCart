import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { lazy } from "react";
import ShimmerUi from "./components/ShimmerUi";
import { useContext } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Merchandise from "./components/Merchandise";

// styling can be done this way

// styles are given as js

//style attributes are given in camel-case slightly differs than that of normal css

// this is not preferred

//can be included as inline style as style={js object for style}
/*const resCard = {
    width: '150px',
    height: '150px',
    backgroundColor: 'white',
    borderRadius: '10%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    boxSshadow: 'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px'
    
};
*/
const Grocery = lazy(() => import("./components/Grocery"));

const Layout = () => {
  const [username, setusername] = useState();
  

  useEffect(() => {
    const data = {
      name: "Deiva",
    };
    setusername(data.name);
  },[]);
  return (
   <Provider store={appStore}> 
    <UserContext.Provider value={{ loggedInUser: username , setusername }}>
    <div className="layout">
        <Header />
       <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<ShimmerUi />}>
            {" "}
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resID",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/merchandise/:dishID/:dishName1",
        element: <Merchandise />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
