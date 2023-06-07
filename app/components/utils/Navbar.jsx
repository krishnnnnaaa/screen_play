"use client";

import { useContext, useEffect, useState } from "react";
import Login from "./Login";
import { AppDataContext } from "@/app/context/Appdata";

export default function Navbar() {
  const { setUserLogged } = useContext(AppDataContext) // To set wheather the user is logged or not 
  const [showAuth, setShowAuth] = useState(false);  // To toggle the login component
  const [userName, setUserName] = useState(null);  // To set the username

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      // To retrieve the user data from localstorage if it exists
      let user = JSON.parse(localStorage.getItem("user")); 
      setUserName(user.name.split(" ")[0]);
      setUserLogged(true)
    }
  });
  const signout = () => {
    // signout user on clicking username
    localStorage.removeItem("user");
    setUserName(null);
    setUserLogged(false)
  };

  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 justify-between flex-row items-center">
          <a className="flex font-medium items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">ScreenPlay</span>
          </a>
          {!userName ? (
            <button
              onClick={() => setShowAuth(!showAuth)}
              className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base"
            >
              Sign up
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          ) : (
            <p
              onClick={signout}
              className="font-semibold text-xl cursor-pointer"
            >
              {userName}
            </p>
          )}
        </div>
      </header>
      {showAuth ? (
        <Login
          setAuth={setShowAuth}
          setUserLogged={setUserLogged}
          setUserName={setUserName}
        />
      ) : (
        ""
      )}
    </>
  );
}
