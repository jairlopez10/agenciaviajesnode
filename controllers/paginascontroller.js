import { Viaje } from "../models/Viaje.js"
import { Testimonial } from "../models/Testimoniales.js";


const paginainicio = async (req, res) => {
    
    //Consultar 3 viajes del modelo Viaje
    const promisedb = [];
    
    promisedb.push(Viaje.findAll({limit: 3}))
    promisedb.push(Testimonial.findAll({limit: 3}))

    try {
        const resultado = await Promise.all(promisedb)

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        })
    } catch (error) {
        console.log(error)
    }

    
    
}

const paginanosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaviajes = async (req, res) => {

    //Consultar BD
    const viajes = await Viaje.findAll(); 


    res.render('viajes', {
        pagina: 'Proximos viajes',
        viajes
    })
}

const paginatestimoniales = async (req, res) => {
    
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log(error)
    }

    
}

//Muestra un viaje por su slug
const paginadetalleviaje = async (req, res) => {

    const { slug } = req.params;
    
    try {
        const viaje = await Viaje.findOne({ where : { slug: slug } });

        res.render('viaje', {
            pagina: 'Informacion viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginainicio,
    paginanosotros,
    paginaviajes,
    paginatestimoniales,
    paginadetalleviaje
}