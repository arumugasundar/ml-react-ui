import { useState, useEffect } from "react";
import './App.css'

function App() {

  const [data, setData ] = useState({});

  useEffect(() => {

    const fetchData = async () => {

      try {
        let response = await fetch("https://ml-fastapi-app.onrender.com/", { method: "GET", redirect: "follow"});
        response = await response.json();
        setData(response);  
      } catch (error: unknown) {
        if(error instanceof Error){
          console.log(error.toString())
        } else {
          console.log(String(error));
        }
      }
      
    }

    fetchData();
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        {JSON.stringify(data)}
      </h1>
    </>
  )
}

export default App
