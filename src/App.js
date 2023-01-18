import { ThemeProvider } from "styled-components";
import Themes from "./theme/Themes";
import { GlobalStyle } from "./Global/GlobalStyle";

import { useMovies } from "./hooks/useMovies";
import { useState } from "react";

import { Nav } from "./componentes/NavBar/Nav";
import { HomePage } from "./componentes/HomePage/HomePage";
import { Screens } from "./Useful/Screens";
import { List } from "./componentes/Listt/List";
import {Filtering} from "./componentes/HomePage/Filtering"
import { EndScreen } from "./componentes/endScreen/EndScreen";


function App() {
  const [theme, setTheme] = useState("light");
  const [conditionalValue, setconditionalValue] = useState(Screens.homeScreen);
  const [title, setTitle] = useState("");
  const [order, setOrder] = useState("");
  const [list, setlist] = useState([]);
  const { movies } = useMovies();

  function addlist(item) {
    list.map((i) => {
      if (i.title === item.title) {
        item.quant = item.quant + i.quant;
      }
    });
    const novolist = list.filter((i) => {
      return i.title !== item.title;
    });
    setlist([...novolist, item]);
  }

  const remove = (movie) => {
    const index = list.findIndex((novolist) => {
      return novolist === movie;
    });
    const moviesFilter = [...list];
    moviesFilter.splice(index, 0);
    setlist(moviesFilter);

    if (moviesFilter.length === 0) {
      localStorage.remove("list");
    }
  };

  const changeScreen = (valor) => {
    setconditionalValue(valor);
  };

  const comeBackHome = (valor) => {
    setconditionalValue(valor);
    localStorage.clear();
    setlist([])
  
  };

  function themes() {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  }

  const renderScreen = () => {
    switch (conditionalValue) {
      case Screens.homeScreen:
        return (
          <>
            <ThemeProvider theme={Themes[theme]}>
              <GlobalStyle />

              <Nav
                conditionalValue={conditionalValue}
                changeScreen={changeScreen}
                themes={themes}
                quantlist={list.length}
              />
              <Filtering
                title={title}
                setTitle={setTitle}
                order={order}
                setOrder={setOrder}
              />

              <HomePage
                changeScreen={changeScreen}
                Screens={Screens}
                title={title}
                order={order}
                addlist={addlist}
                setlist={setlist}
                movies={movies}
              />
            </ThemeProvider>
          </>
        );

      case Screens.listScreen:
        return (
          <>
            <ThemeProvider theme={Themes[theme]}>
              <GlobalStyle />

              <Nav
                conditionalValue={conditionalValue}
                changeScreen={changeScreen}
                themes={themes}
              />

              <List
                Screens={Screens}
                changeScreen={changeScreen}
                list={list}
                setlist={setlist}
                movie={movies}
                remove={remove}
              />
            </ThemeProvider>
          </>
        );

      case Screens.endScreen:
        return (
          <>
            <ThemeProvider theme={Themes[theme]}>
              <GlobalStyle />
              <EndScreen Screens={Screens} comeBackHome={comeBackHome} />
            </ThemeProvider>
          </>
        );
    }
  };
 
  return <>{renderScreen()}</>;
}

export default App;
