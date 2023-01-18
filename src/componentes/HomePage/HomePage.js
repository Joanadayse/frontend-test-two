import { Main } from "./styled";
import { Cards } from "./Cards";


export function HomePage({
  changeScreen,
   Screens,
  title,
  order,
 addlist,
  setlist,
  movies,
}) {


  return (
    <Main>
      {movies

        .sort((a, b) => {
          if (order.toLowerCase() === "crescente") {
            if (a.title < b.title) {
              return -1;
            } else {
              return true;
            }
          }
          if (order.toLowerCase() === "decrescente") {
            if (b.title < a.title) {
              return -1;
            } else {
              return true;
            }
          }

        })

        .filter((movies) => {
          return movies.title.toLowerCase().includes(title.toLowerCase());
        })

        .map((movies , index) => {
          return (
            <Cards  key={index}
              movies={movies}
             addlist={addlist}
              setlist={setlist}
            />
          );
        })}


      <button
        className="butonList"
        onClick={() => changeScreen( Screens.listScreen)}>
        Ir para a sua lista
      </button>
    </Main>
  );
}
