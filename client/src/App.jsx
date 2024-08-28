import "./App.scss";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { io } from "socket.io-client";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { SocketProvider } from "./hooks/SocketContext";

function App() {
  return (
    <div className="app">
      <SocketProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:channelId" element={<Chat />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </SocketProvider>
    </div>
  );
}

export default App;
