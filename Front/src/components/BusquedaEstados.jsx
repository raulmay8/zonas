import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'

const BusquedaEstados = () => {
    let { id } = useParams();

    const URL = 'http://localhost:4000/estados';

    const [estados, setEstados] = useState([])
    useEffect(()=>{
        getEstados()
    }, [])

    const getEstados = async()=>{
        const res = await axios.get(URL)
        setEstados(res.data)
    }
    const navigate = useNavigate(); 

    const handleSelectChange = (event) => {
        const selectedId = event.target.value;
        navigate(`/detalle/${selectedId}`)
    }
    const defaultValue = 'seleccionar'
  return (
    <div className='grid grid-cols-1 md:grid-cols-1 max-w-sm items-center ml-14 cursor-pointer border md:flex-row border-green-900 m-3 bg-green-700 shadow rounded-xl '>
        
        <form className="max-w-sm mx-full w-auto">
            <select 
                id="countries" 
                className="text-lg rounded-lg block w-full p-2.5 cursor-pointer text-white border-none border-green-900   bg-green-500 shadow hover:bg-green-300"
                onChange={handleSelectChange }
                defaultValue={defaultValue}
                >
                <option value="seleccionar">
                    Seleccionar un estado
                </option>

                {estados.map((estado) => (
                 <option 
                 key={estado.idEstado} 
                 value={estado.idEstado}
                 >
                    {estado.name}
                </option>
                ))}
            </select>
        </form>
    </div>
  )
}

export default BusquedaEstados