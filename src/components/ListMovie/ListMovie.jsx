import { useEffect, useState } from 'react';

export function ListMovie({ movies }) {
  const [visibleMovie, setVisibleMovie] = useState('');

  useEffect(()=>{
    setVisibleMovie(movies)
  },[movies])

  return visibleMovie && 
  <ul>
    {visibleMovie.map((item)=><li key={item.id}>{item.title}</li>)}
  </ul>
};
