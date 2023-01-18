import {apiImg} from "../../Useful/linksAPI"
import { FiTrash2 } from "react-icons/fi";
import { Container } from "./styled";


export function List ({changeScreen, Screens ,  list , remove}){
    return(
        <Container>
            <h1>Sua Lista</h1>

            {list.map((item) => {
                return <div className="allCards" key={item.id}>
                    {
                        <div className="content">
                        <img src={`${apiImg}${item.poster_path}` }   />
                        <p> {item.title}</p>
                      <FiTrash2 onClick={() => remove(list)} />     
                  </div>
                    }
                    </div>
})}
            <button className="buttonFinish" onClick={()=>changeScreen( Screens.endScreen)}>Finalizar</button>
           
        </Container>
    )
}