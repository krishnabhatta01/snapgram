import {Routes, Route} from 'react-router-dom';

import './App.css';
import {SigninForm, SignupForm } from './_auth/forms';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

const App = () => {
  return (
   <main className='flex h-screen'>
    <Routes>

        {/* Public routes */}
        <Route element={ <AuthLayout/> } > 
          <Route path="/sign-in" element={ <SigninForm/> } />
          <Route path="/sign-up" element={ <SignupForm/> } />
        </Route>

        {/* Private routes */}
        <Route element={ <RootLayout/> } >
          <Route index element={ <Home/> } />
        </Route>
    </Routes> 
   </main>
  )
}

export default App