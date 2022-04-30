import React, { useState } from "react";
import sunIcon from "./assets/sunIcon.png";
import moonIcon from "./assets/moonIcon.png";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  // useEffect(() => {
  //   if (window.localStorage.getItem("DarkTheme") !== null) {
  //     setDarkTheme(JSON.parse(window.localStorage.getItem("DarkTheme")));
  //   }
  // }, []);

  // useEffect(() => {
  //   if (darkTheme === true) {
  //     document.querySelector("html").classList.add("dark");
  //   } else {
  //     document.querySelector("html").classList.remove("dark");
  //   }

  //   window.localStorage.setItem("DarkTheme", JSON.stringify(darkTheme));
  // }, [darkTheme]);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div onClick={() => setDarkTheme(!darkTheme)}>
            <span class="inline-flex items-center justify-center p-2 bg-amber-500 dark:bg-blue-500 rounded-md  shadow-lg">
              <img
                className="h-6 w-6"
                src={darkTheme ? sunIcon : moonIcon}
                alt="icon"
              />
            </span>
          </div>

          <h3 class="text-slate-900 dark:text-white mt-5 text-lg font-medium ">
            Hello Dark Mode 👋
          </h3>
          <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            Created using TailwindCSS in a React Application.
          </p>
        </div>
        <p className="mt-5">
          Made with ❤️ by{" "}
          <a
            className="underline italic"
            href="https://www.linkedin.com/in/sundeepbasak/"
            target="_blank"
            rel="noreferrer"
          >
            sundeepbasak
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
