import { Container } from "./styled";
import { Screens } from "../../Useful/Screens";
import { BiCart, BiHome } from "react-icons/bi";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";

export function Nav({ conditionalValue, changeScreen, themes, quantlist }) {
  
  function icons() {
    switch (conditionalValue) {
      case Screens.homeScreen:
        return (
          <span className="span">
            <li className="counter"> {quantlist}</li>
            <BiCart
              className="icons"
              onClick={() => changeScreen(Screens.listScreen)}
            />
            <div>
              <input
                type="checkbox"
                class="checkbox"
                id="checkbox"
                onClick={themes}
              />
              <label for="checkbox" class="label">
                <MdOutlineDarkMode className="fa-moon" />
                <MdOutlineWbSunny className="fa-sun" />
                <div class="ball"> </div>
              </label>
            </div>
          </span>
        );

      case Screens.listScreen:
        return (
          <BiHome
            className="icons"
            onClick={() => changeScreen(Screens.homeScreen)}
          />
        );

      default:
        return (
          <BiHome
            className="icons"
            onClick={() => changeScreen(Screens.homeScreen)}
          />
        );
    }
  }

  return (
    <Container>
      <h1>Melhores Filmes</h1>
      {icons()}
    </Container>
  );
}
