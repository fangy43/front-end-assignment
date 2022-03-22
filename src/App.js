import './App.css';
import { Card } from './components/Card/Card'
import axios from 'axios';
import { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState()

  useEffect(() => {
    axios.get(`https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json`)
      .then(res => {
        setData(res.data)
      })
  }, [])


  return (
    <div className="App">
      {data?.map(ele => <Card data={ele} />)}

    </div>
  );
}

export default App;
