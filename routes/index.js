import express from "express";
import { paginainicio, 
    paginanosotros, 
    paginatestimoniales, 
    paginaviajes, 
    paginadetalleviaje }
from "../controllers/paginascontroller.js";
import {
    guardartestimonial
}
from "../controllers/testimonialescontroller.js";


const router = express.Router();

router.get('/', paginainicio)

router.get('/nosotros', paginanosotros);

router.get('/viajes', paginaviajes);

router.get('/viajes/:slug', paginadetalleviaje);

router.get('/testimoniales', paginatestimoniales);

router.post('/testimoniales', guardartestimonial);

export default router;