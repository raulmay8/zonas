import {Zonas} from '../model/Zonas.js'
import { Estados } from '../model/Estados.js'

export const getEstados = async (req, res) => {
    try {
        const estados = await Estados.findAll()
        res.json(estados)   
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const getEstado = async (req, res) =>{
  try {
      const {idEstado} = req.params;
      const estado = await Zonas.findAll({
            where: {idEstadoF: idEstado},
      });
      if (!estado)
          return res.status(404).json({message: "El Estado no existe"})
      res.json(estado)
  } catch (error) {
      return res.status(500).json({message: error.message});
  }
}