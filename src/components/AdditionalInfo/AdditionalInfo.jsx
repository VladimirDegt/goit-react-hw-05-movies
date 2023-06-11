import { Link, useParams } from "react-router-dom"
export function AdditionalInfo(){
  const { moviesId } = useParams();
  return (
    <>
    <h3>Additional information</h3>
    <ul>
      <Link to={`/movies/${moviesId}/cast`}><li>Cast</li></Link>
      <Link to={`/movies/${moviesId}/reviews`}><li>Reviews</li></Link>
    </ul>
    </>
  )
}