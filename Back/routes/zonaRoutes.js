import { Router } from "express";
import { getZonas, getZona, getZonaCarrusel } from "../controllers/zonaController.js";

const router = Router()

    router.get('/zonas', getZonas)
    router.get('/zonas/:idZona', getZona)
    router.get('/carrusel', getZonaCarrusel)

export default router