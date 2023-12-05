import { Zonas } from "../model/Zonas.js";
import { Estados } from "../model/Estados.js";

export const getZonas = async (req, res) => {
    try {
        const zonas = await Zonas.findAll({include: Estados})
        res.json(zonas)   
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const getZona = async (req, res) => {
    try {
        const {idZona} = req.params
        const zona = await Zonas.findOne({
            include: Estados,
            where: {
                idZona,
            },
        })
        if(!zona)
            return res.status(404).json({message: 'La zona arqueológica no existe'})
            res.json(zona)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const getZonaCarrusel = async (req,res) => {
    try {
        const zonas = await Zonas.findAll({offset: 10, limit: 5})
        res.json(zonas)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}