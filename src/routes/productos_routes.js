const express = require('express');
const router = express.Router();


const productos = [ 
    {
        id: 1,
        nombre:"Semillas",
        imagen: process.env.IMAGES_URL + "seed.png",
        precio:"$ 40"
    },
    {
        id: 2,
        nombre:"Plantas vivas",
        imagen: process.env.IMAGES_URL + "plant.png",
        precio:"$ 35"

    },
    {
        id: 3,
        nombre:"Accesorios",
        imagen: process.env.IMAGES_URL + "harvest.png",
        precio:"$ 60"
    },
    {
        id: 4,
        nombre:"Todo para tu huerta",
        imagen: process.env.IMAGES_URL + "joshua-tree.png",
        precio:"$ 75"
    },
    

]

router.get('/', (req, res) => {
    res.json(productos);
})

router.get('/:id', (req,res)=> {

    let producto = productos.filter( producto => producto.id == req.params.id);
    
    if (producto.length ==1){
        producto = producto[0];
    }
    res.json(producto);
})


module.exports = router;


