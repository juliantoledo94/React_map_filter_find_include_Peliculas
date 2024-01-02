import React from 'react'
import PeliculasComponente from './PeliculasComponente'

const App = () => {
  const peliculas = [
    { titulo: 'La película 1', anio: 2020, genero: 'Acción', actores: ['Actor1', 'Actor2'] },
    { titulo: 'La película 2', anio: 2019, genero: 'Comedia', actores: ['Actor3', 'Actor4'] },
    { titulo: 'La película 3', anio: 2021, genero: 'Drama', actores: ['Actor1', 'Actor5'] },
    // Agrega más objetos según sea necesario
  ];
  return (
    <>
    <PeliculasComponente peliculas = {peliculas}></PeliculasComponente>
    </>
  )
}

export default App