
import axios from 'axios';
import React, {useState} from 'react'

const CarComp = () => {
  
     const [car, setCar] = useState([])

     const fetchCar = () => {
       console.log("button clicked")
       
        console.log(localStorage.getItem('token'))

         let varToken = localStorage.getItem('token')

        const config = {
            method: "get",
            url: "http://testapi.techenablers.info/api/car",
            headers: {
                "Authorization": 'bearer'+ varToken
            }
        }

        axios(config)
            .then((res) => {
                console.log(res.data[0].data[0])
                setCar(res.data[0].data)
                console.log(car)
            })   
       }

  return (
    <>

<div className='container my-3'>
<div className='row'>
<div className='col-12'>
<button onClick={fetchCar} className='btn  btn-info m-2'>click me to see a new car component</button>
</div>
</div>
</div>

    <div className='container'>
    <div className='row'>

    {
      car.map((x)=>{
        return(
          <>
            <div className='col-4 mb-4'>
            <div className="card" style={{ width: "18rem" }}>
            <img src={x.carPictureFullUrl} className="card-img-top" alt="car pic not found" />
            <div className="card-body">
            <h5 className="card-title">Name: {x.name}</h5>
            <p className="card-text">ID: {x.id} <br/> Company: {x.company} <br/> model: {x.model} <br/> Color: {x.color} <br/> Price: {x.price}</p>
            <a href={x.image} className="btn btn-primary">Image not found</a>
            </div>
            </div>
            </div>
          </>
        )
      })
    }

    </div>
    </div>
    
    </>
  )
}

export default CarComp;