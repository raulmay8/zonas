import { useState, useEffect } from 'react'
import axios from 'axios'
import { Carousel } from "@material-tailwind/react";
import { useParams } from 'react-router-dom';

const Carrusel = () => {
  
    let { id } = useParams();
  
    const URI = 'http://localhost:4000/carrusel/'
    const URLF = 'http://localhost:4000/detalle/zona/'+id;

    const [zonas, setZonas] = useState([])
    useEffect(()=>{
        getZonas()
    }, [])

    const getZonas = async()=>{
        const res = await axios.get(URLF)
        setZonas(res.data)
    }

  const [car, setCar] = useState([])
    useEffect(() => {
      getCar()
    }, [])

  const getCar = async() => {
    const res = await axios.get(URI)
    setCar(res.data)
  }
  return (
    <Carousel transition={{ type:"tween", duration: 1 }} autoplay loop className="rounded-xl w-auto h-[35rem] m-2">
    {car.map(ca => (
      <a key={ca.idZona} href={`detalle/zona/${ca.idZona}`}>
        <img 
            key={ca.idZona}                         
            src={ca.image}
            alt={`Imagen ${ca.idZona}`}  
            className="h-full w-full object-fill"
            />
      </a>
    ))}
      </Carousel>
  )
}

export default Carrusel