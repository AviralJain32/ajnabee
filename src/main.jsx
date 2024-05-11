import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import NearMe from "./components/NearMe Page/NearMe.jsx"
import { Lan } from '@mui/icons-material'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { Provider} from 'react-redux'
import store from './store/index.jsx'
import SignUpPage from './components/Authentication/SignUpPage.jsx'


const router=createBrowserRouter(createRoutesFromElements(
  <>
  {/* <Routes> */}
  <Route path='/' element={<Layout/>}>
    <Route index element={<LandingPage/>}/>
    <Route path='/signup' element={<SignUpPage/>}/>
    <Route path='/nearyou' element={<NearMe/>}/>
    {/* <Route path='user/:userid' element={<User/>}/>
    <Route path='github' element={<Github/>} loader={githubInfoLoader}/> */}
  </Route>
  {/* </Routes> */}
  </>
  )
)
// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       "poppins"
//     ].join(','),
//   },
// });
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  {/* <ThemeProvider theme={theme}> */}
    <RouterProvider router={router}/>
  {/* </ThemeProvider>, */}
  </Provider>
)

