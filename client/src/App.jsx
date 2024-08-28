import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRegister from "./pages/UserRegister/UserRegister";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { SocketProvider } from "./hooks/SocketContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <SocketProvider>
        <BrowserRouter>
          <Header user={user}/>
          <Routes>
            <Route path="/register" element={<UserRegister setUser={setUser} />} />
            <Route path="/" element={<Home user={user}/>} />
            {/** TODO: we need to add the user info to the chat */}
            <Route path="/chat/:channelId" element={<Chat user={user}/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </SocketProvider>
    </div>
  );
}

export default App;
