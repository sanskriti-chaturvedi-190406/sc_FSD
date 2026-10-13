import React,{useEffect, useState} from 'react';

 function FetchProducts() {
    const [data, setData] = useState([]);
    useEffect(()=>{
      async function fetchData(){
        try{
          const response=await  fetch("https://dummyjson.com/products")
          const jsonData=await response.json();
          console.log(jsonData);
          setData(jsonData.products);
        }catch(e){
          console.log("Error is:"+e)
        }finally{
            console.log("Fetching data completed.")
        }
      }
      fetchData();      
    },[])

  return (
    <div>Fetch Products<hr></hr>
      {
        data.map(element => (
          <div>
          <img src={`${element.images[0]}`} height='300' width='350'></img>
          
          <h2>
            <button>addToCart</button>
          </h2>
          
          <h2>
            {element.id} : {element.title}
          </h2>

          <p>{element.description}</p>
          
          <hr></hr>
          </div>
        ))
      }
    </div>
  )
}

export default FetchProducts