import InformacionCreacion from "../components/InformacionCreacion"
import InformacionPersonal from "../components/InformacionPersonal"

const Informacion = () => {
  return (
    <div 
        className="grid grid-cols-1 shadow rounded-xl md:grid-cols-2 items-center border md:flex-row w-auto m-5 border-green-900  bg-green-700  hover:bg-green-500">
        <InformacionCreacion/>
        <InformacionPersonal/>
    </div>
  )
}

export default Informacion