import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Signup from './signup';
import { PaymentForm } from './PaymentForm';
import { Success } from './Success';
import { Failed } from './Failed';
import { Login } from './Login';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/payment' element={<PaymentForm />}></Route>
        <Route path='/success' element={<Success />}></Route>
        <Route path='/failed' element={<Failed />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


