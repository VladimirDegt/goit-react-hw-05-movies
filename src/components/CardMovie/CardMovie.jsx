import { useEffect, useState } from "react";

export function CardMovie({card}){
  const [infoMovie, setInfoMovie] = useState('');

  useEffect(()=>{
    setInfoMovie(card)
  }, [card]);

  return(
    <>
      <>Тут должна быть картинка!!!</>
      <h1>{infoMovie.title}</h1>
      <h2>Overview</h2>
      <p>{infoMovie.overview}</p>
      <h2>Genres</h2>
      <ul>
        {infoMovie && infoMovie.genres.map((item)=><li key={item.id}>{item.name}</li>)}
      </ul>
    </>
  );
}
