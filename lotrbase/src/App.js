import {useEffect,useState,} from "react"
import './App.css';
import axios from "axios"
function App() {
  const[books,setBooks] = useState([])
  const lordAPI =()=>{
 
  }
  useEffect(() => {
   const api = lordAPI()
   setBooks(api)
    
  });
  return (
    <div className="App">
      a
    </div>
  );
}

export default App;
