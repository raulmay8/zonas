import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'

const ListaZonas = () => {
    let { id } = useParams();

    const URLF = 'http://localhost:4000/estados/'+id;

    const [zonas, setZonas] = useState([])
    useEffect(()=>{
        getZonas()
    }, [])

    const getZonas = async()=>{
        const res = await axios.get(URLF)
        setZonas(res.data)
    }
  return (
    <div className="grid grid-cols-2 m-5 md:grid-cols-3 gap-4">
    {zonas.map((zona) => (
      <div className="max-w-sm  w-auto m-5 p-4 shadow rounded-xl border-green-900 bg-green-700  hover:bg-green-500"
           key={zona.idZona}>
          <ul >
              <div key={zona.idZona} className='m-1'>  
                  <a href={`zona/${zona.idZona}`}>
                      <img className="h-60 m-auto rounded-lg cursor-pointer"
                          src={zona.image}
                          alt=''                        
                          />      
                      <h5  className="mt-2 text-2xl font-bold text-center text-white dark:text-white">
                          {zona.name}
                      </h5>
                  </a> 
              </div>   
          </ul>
      </div>
    ))}
  </div> 
    )
  }
  
  export default ListaZonas