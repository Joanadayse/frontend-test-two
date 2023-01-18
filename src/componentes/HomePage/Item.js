import { apiImg } from "../../Useful/linksAPI"

export function Item ({movies , newCar}){
    return (
        <div className="allCards">
        <div className="contentCards">
    <img src={`${apiImg}${movies.poster_path}` }   />
<p> {movies.title}</p>
<button className="botao" onClick={newCar}>Adicionar</button>
</div>
</div>
    )
}