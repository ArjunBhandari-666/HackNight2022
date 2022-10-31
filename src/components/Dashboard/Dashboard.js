import React,{useEffect,useState} from 'react'
import './Dashboard.css'
const Dashboard = () => {
  useEffect(() => {
    fetch("https://api.airtable.com/v0/appEbfK98XiSAoltm/records?api_key=keycoBS9EC4zmk6Wr")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.records);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [recipes, setRecipes] = useState({});
  return (
    <div className='dashboard'>
    <h1>HISTORY</h1>
    <div className='dashboard-container'>
       
            {/* <div className='card'>
                <p><span>Name :</span>Mr. Ramesh </p>
                <p><span>Checkup Date:</span> 31-10-2022</p>
                <p><span>Checkup at :</span> AJ Hospital</p>
                <p><span>Doctors Name :</span> Dr. Ram </p>
                <p><span>Summary :</span> Diagnosed with low Blood pressure</p>
                <p><span>Medicine prescribed :</span> Cilacar (5mg)</p>

            </div>
        */}
          {recipes.length > 0 ? (
      recipes.map((record) => (
        <a href={record.fields.url} key={record.id}>
          {/* <img src={record.fields.photo[0].url} alt={record.fields.recipe} /> */}
          <p>{record.fields.Name}</p>
        </a>
      ))
    ) : (
      <p>Fetching Data...</p>
    )}
    </div>
    </div>
  )
}

export default Dashboard
