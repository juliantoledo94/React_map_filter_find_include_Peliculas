import React from 'react'

const PeliculasComponente = ({peliculas}) => {
    const resultado = peliculas.map(valor => <div key={valor.titulo}>{valor.titulo}</div>)
    const resultado2= peliculas.filter(valor => valor.anio>2020).map(valor =><div key={valor.titulo}>{valor.titulo}</div>)
    const resultado3 = peliculas.find(valor => valor.genero =="Comedia")
    const resultado4 = peliculas.find(valor => valor.actores.includes("pepito"))
  return (
    <div><h2>Utiliza map para mostrar en la consola solo los títulos de todas las películas.</h2>
    {resultado}<h2>Utiliza filter para obtener un nuevo array que contenga solo las películas que fueron lanzadas después del año 2020.</h2>{resultado2}
    <h2>Utiliza find para encontrar la primera película cuyo género sea 'Comedia' y muestra su título en la consola.</h2>{resultado3.titulo}
    <h2>Utiliza includes para verificar si hay alguna película que tenga a 'Actor5' en su lista de actores, y muestra un mensaje en la consola indicando si se encuentra o no.</h2>{resultado4 == undefined ? "no se ha encontrado" : resultado4.titulo}
    </div>
    
  )
}

export default PeliculasComponente