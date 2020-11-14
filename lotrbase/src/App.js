import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import LOTRCard from "./components/lotrCard"
import {LOTRContext} from"./contexts/lotrProvider"
function App() {
  const [books, setBooks] = useState([]);
  const lordAPI = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_LOTR_API_KEY}`,
      },
    };
    axios
      .get("https://the-one-api.dev/v2/./movie", config)
      .then((response) => {
        setBooks(response.data.docs)
        return
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if(books.length === 0){
      console.log("api called")
       lordAPI();
    }
    return
  });
  return <div className="App">

  <LOTRContext.Provider value={{books,setBooks}}>
    <LOTRCard/>
  </LOTRContext.Provider>
  
  </div>;
}

export default App;
