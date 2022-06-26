import React,{useState, useEffect} from 'react';
import './App.css';
import DictList from './Components/dictList.component';
import ShowList from './Components/showList.component';


const App = () => {
  const [pages, setPages] = useState([])
  const [page,setPage] = useState([])
  

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('/pages', {'methods' : 'GET'})
        .then(response => response.json())
        .then(response => setPages(response));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

useEffect(() => {  
  // GET request using fetch inside useEffect React hook
  fetch(`/page/hello`, {'methods' : 'GET'},)
      .then(response => response.json())
      .then(response => setPage(response));
      

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);



  return (
    <div className="App container m-4">
    <div className="row">
      <div className="text-center">
      <h1>Connecting a React Frontend to a Flask Backend.</h1>
      </div>
    </div>

      <DictList
      pages={pages.titles}
      />

      <ShowList 
      page = {page.revisions}
      />

    </div>
  )
}

export default App;