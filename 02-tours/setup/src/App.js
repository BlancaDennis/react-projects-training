import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchToursInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    }catch (error){
      setLoading(false);
      console.log(error)
    }  
  }

useEffect(() => {
  fetchToursInfo();
}, [])

  if(loading){
    return <main>
      <Loading/>
    </main>
  }
  if(tours.length === 0){
    return <main>
      <div className='title'>
        <h2>No tours left 😢</h2>
        <button className="btn" onClick={fetchToursInfo}>Show all</button>
      </div>
    </main>
  }
  return (
  <main>
    <Tours tours={tours} revomeTourFunction={removeTours}/>
  </main>
)}

export default App
