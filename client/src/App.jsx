import './App.css';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

function App() {
  useEffect(() => {
    const socket = io('http://localhost:3000');
    socket.on('connect', () => {
      console.log('connected to server');
    });
  }, []);
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
