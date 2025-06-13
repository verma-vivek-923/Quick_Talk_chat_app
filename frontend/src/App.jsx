import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useAuth } from "./context/AuthProvider";
// import ErrorBoundary from './ErrorBoundary';

const App = () => {
  const { profile, loading} = useAuth();

  console.log(profile,loading);

  if(loading){
    return (
      <div className="min-h-[100dvh] w-full bg-gray-800">
         <div className="w-full h-[100dvh] flex-col flex justify-center items-center">
            <h1  className="text-2xl lg:text-3xl text-center ">
              Welcome To <br/>
            <span className="text-5xl lg:text-6xl">Quick<span className="text-accent">Talk</span></span>  
            </h1>
          <div>
          <progress className="progress w-56"></progress>
          </div>
       </div>
      </div>
    )
  }

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={profile ? <Home />  :
          //  <Home />
          <Navigate to={"/login"} />
        }
        />
        <Route
          exact
          path="/login"
          element={profile ? <Navigate to={"/"} /> : <Login />}
        />

        
        <Route exact path="/register" element={<Register />} />
        {/* <Route exact path="/blog/:id" element={<Detail />} />
        <Route exact path="/blog/update/:id" element={<Update_Blog />} />
          {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route exact path="/user/update/:id" element={<Update_user />} /> */}
        {/* <Route eaxct path="/blog/search" element={<SearchBlogs />} /> */} */
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
