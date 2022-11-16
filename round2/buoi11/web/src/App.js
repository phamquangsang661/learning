
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Layout from './components/Layout'
function App() {

  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
