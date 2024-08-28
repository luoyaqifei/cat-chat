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
            {/* TODO: 
                *Add new page/route that is a form to take in user-input that asks for: 
                  -displayed username
                  -email (for auth.)

                  -add user info to localStorage! --> extra/nice-to-have
                  -as part of new-user feature, display username side messages in chat 
                *Redirect to register page
             */}
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
