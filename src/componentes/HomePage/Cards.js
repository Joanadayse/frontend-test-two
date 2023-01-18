import { Item } from "./Item"


export function Cards ({movies , addlist}){


    const newCar=()=>{
       
        const item={
               id:movies.id,
               poster_path:movies.poster_path,
               title:movies.title,
            //    preco:movies.title,
            //    total:movies.title * quant,
            //    quant:quant
           }

           addlist(item)

 } 

    return(
        <Item movies={movies} newCar={newCar}/>
       
    )
}