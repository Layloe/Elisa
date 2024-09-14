import React from "react";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import NewPostPage from "./pages/NewPostPage";
import NavBar from './components/NavBar'
import EditPostPage from "./pages/EditPostPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"
import LandingPage from "./pages/LandingPage";



function App() {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/posts" element={<HomePage />} />               
        <Route path="/posts/new" element={<NewPostPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/posts/edit/:id" element={<EditPostPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;