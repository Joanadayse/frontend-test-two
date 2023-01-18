
import { Screens } from "../../Useful/Screens"

export function  EndScreen({comeBackHome}){
    return(
        <div className="endScreen">
            <h1>Obrigado, volte sempre!</h1>
            <button className="lastbutton" onClick={()=>comeBackHome(Screens.homeScreen)}>Voltar a home</button>
        </div>
    )
}