import {useEffect,useState,} from "react"
import './App.css';
import axios from "axios"
function App() {
  const[books,setBooks] = useState([])
  const lordAPI =()=>{
    const config = {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_LOTR_API_KEY}` }
  };
  axios
  .get(
    'https://the-one-api.dev/v2/./movie',
    config
  )
  .then(response => {
  console.log(response,"here")
  })
  .catch(err => console.log(err));
  }
  useEffect(() => {
   const api = lordAPI()
   setBooks(api)
    
  });
  console.log(books)
  return (
    <div className="App">
      a
    </div>
  );
}

export default App;
