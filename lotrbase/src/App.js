import {useEffect,useState,} from "react"
import './App.css';
import axios from "axios"
function App() {
  const[books,setBooks] = useState([])
  const lordAPI =()=>{
  axios
  .get(`https://the-one-api.dev/v2/book?api_key=${
    process.env.REACT_APP_LOTR_API_KEY}`)
  .then(response => {
  console.log(response)
  })
  .catch(err => console.log(err));
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
