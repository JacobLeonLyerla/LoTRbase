import {useEffect,useState,setState} from "React"
import './App.css';
import axios from "axios"
function App() {
  const lordAPI =()=>{
  axios
  .get(`https://the-one-api.dev/v2/book?api_key${
    process.env.REACT_APP_LOTR_API_KEY}`)
  .then(response => {
    this.setState({
      movies: response.data.results,
      totalPages: response.data.total_pages
    });
  })
  .catch(err => console.log(err));
  }
  return (
    <div className="App">
      a
    </div>
  );
}

export default App;
