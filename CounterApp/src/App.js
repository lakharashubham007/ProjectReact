import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  function decreseHandler(){
    setCount(count-1);
  }


  
  function increseHandler(){
    setCount(count+1);
  }

  function resetHandler() {
    setCount(0);
  }
  

  return (
   <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10 bg-gradient-to-r from-violet-200 to-pink-200">
    <div className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Counter <span className="text-blue-600 dark:text-blue-500">App</span></div>
    <div className="bg-gradient-to-r from-rose-100 via-sky-100 to-blue-100 flex justify-center gap-12 py-3 rounded-xl text-[25px] text-[#344151] ">
      <button onClick={decreseHandler}  className=" ml-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        -
      </button>
      <div className=" mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {count}
      </div>
      <button onClick={increseHandler}  className=" text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        +
      </button>
    </div>
    <button onClick={resetHandler} className=" text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">RESET</button>
   </div>
  );
}

export default App;
