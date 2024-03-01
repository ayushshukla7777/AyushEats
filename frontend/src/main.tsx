import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { RouterProvider } from "react-router-dom";

import AuthenticationProvider from './auth/AuthenticationProvider'
import router from './NewAppRoutes';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthenticationProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthenticationProvider>
  </React.StrictMode>,
)


// import AppRoutes from './AppRoutes'
// import { BrowserRouter as Route } from 'react-router-dom'
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Router>
//       <AuthenticationProvider>
//         <AppRoutes/>
//       </AuthenticationProvider>
//     </Router>


//   </React.StrictMode>,
// )