import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Allapps from '../pages/Allapps/Allapps';
import AppDetails from '../pages/AppDetails/AppDetails';
import AppNotFound from '../pages/NoAppFound/NoAppFound';
import { Toaster } from "react-hot-toast";
import InstalledApps from '../pages/InstalledApps/InstalledApps';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            loader:()=>fetch('/appData1.json'),
            path:'/',
            Component:Home,
        },
        {
            path:'/allapps',
            Component:Allapps,
            loader:()=>fetch('/appData2.json')
        },
        {
          path:'/appdetails/:id',
          loader:()=>fetch('/appData2.json'),
          Component:AppDetails,
        },
        {
          path:'/appnotfound',
          Component:AppNotFound
        },
        {
          path:'/installedApps',
          Component:InstalledApps,
          loader: async () => {
    const response = await fetch('/appData2.json');
    if (!response.ok) throw new Error('Failed to load app data');
    const data = await response.json();
    return data; // this will be available in useLoaderData()
  }
        }
        
    ]
  },
]);