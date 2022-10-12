import './App.css';
import Login from './components/LoginApp.js'
import LiveChat from './components/LiveChat.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [username, setUsername] = useState("")
  return (
    <Router>
      <Routes>
        <Route path="/room/:id" element={<LiveChat username={username} />} />
        <Route path="/" element={<Login unState={{ username, setUsername }} />} />
      </Routes>
    </Router>
  );
}

export default App;
