import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DetalleZonas = () => {
    let navigate = useNavigate()
    let { id } = useParams();

    const URLF = 'http://localhost:4000/zonas/'+id;

    const [zonas, setZonas] = useState([])
    useEffect(()=>{
        getZonas()
    }, [])

    const getZonas = async()=>{
        const res = await axios.get(URLF)
        setZonas(res.data)
    }

    let atras = () =>{
        navigate(-1)
    }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center border md:flex-row shadow rounded-xl w-auto m-5 p-4 border-green-900  bg-green-700  hover:bg-green-500">
        <img
            className="w-full h-80 object-cover rounded-xl md:rounded-xl"
            src={zonas.image}
            alt={`Imagen ${zonas.idZona}`}
        />
        <div className="flex flex-col p-4 leading-normal">
            <h2 className=" text-2xl font-bold tracking-tight text-white dark:text-white">
                {zonas.name}
            </h2>
            <p className="p-3 font-normal text-gray-200 dark:text-white">
                {zonas.description}
            </p>
            <h3 className="p-3 text-xl font-bold tracking-tight text-white dark:text-white">
                Coordenadas
            </h3>
            <p className="p-3 font-normal text-gray-200 dark:text-white">
                {zonas.coordinate}
            </p>
            <h3 className="p-3 text-xl font-bold tracking-tight text-white dark:text-white">
                {zonas.status}
            </h3>
            <button 
                type="button" 
                className="focus:outline-none text-white  font-bold rounded-lg text-base px-5 py-2.5 me-2 mb-2 bg-green-800 hover:bg-green-900 focus:ring-4 focus:ring-green-300"
                onClick={atras}
                >
                    Regresar
            </button>
        </div> 
  </div>
      )
    }

export default DetalleZonas
