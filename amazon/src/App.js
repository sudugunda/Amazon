import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Orders';

const promise  = loadStripe('pk_test_51IpqUCSHaeMQiHoViWYBXy5yunG3bmzyExYrGNg6owt0MxLgUO20hJGGYtWKCSy1qmtfZBhtCX5Je0VZ81BSHe4B00spC5fy2M');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    
    <Router>
      <div className="App">
      <Header />
      <Routes>
        <Route path="/orders" element={<Orders/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Elements stripe={promise}><Payment/></Elements>} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
