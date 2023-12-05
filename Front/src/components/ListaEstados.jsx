import axios from 'axios'

import { useEffect, useState } from 'react'

const URI = 'http://localhost:4000/estados/'

const ListaEstados = () => {
      
    const [estados, setEstados] = useState([])
    useEffect(()=>{
        getEstados()
    }, [])

    const getEstados = async()=>{
        const res = await axios.get(URI)
        setEstados(res.data)
    }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-10">
      {estados.map((estado) => (
        <div  className="max-w-s w-auto m-5 p-4 shadow rounded-xl border-green-900  bg-green-700  hover:bg-green-500" 
              key={estado.idEstado}>
            <ul className='list-none'>
                <div key={estado.idEstado} className='m-1'>
                    <a href={`detalle/${estado.idEstado}`}>
                        <img className="h-56 m-auto rounded-lg cursor-pointer"
                            src={estado.image}
                            alt=''                        
                            />
                        <h5  className="mt-2 text-2xl font-bold text-center text-white dark:text-white">{estado.name}</h5>
                    </a>
                    
                </div>   
            </ul>
        </div>
      ))}
    </div>
  )
}
export default ListaEstados