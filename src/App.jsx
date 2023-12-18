import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProtectedRoute from './components/Helper/ProtectedRoute';
import Home from './components/Home';
import Login from './components/Login/Login';
import User from './components/User/User';
import { UserStorage } from './context/UserContext';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login/*' element={<Login />} />
            <Route path='/conta/*' element={
              <ProtectedRoute>
                <User/>
              </ProtectedRoute>}
            />
          </Routes>
          <Footer />
         </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
