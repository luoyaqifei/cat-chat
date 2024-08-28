import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

// Create a context
const SocketContext = createContext();

// Create a provider component
export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Initialize the socket connection
    const newSocket = io('http://localhost:3000'); // Replace with your server URL
    setSocket(newSocket);

    return () => {
      // Clean up the socket connection on component unmount
      newSocket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

// Create a custom hook to use the socket context
export const useSocket = () => {
  return useContext(SocketContext);
};