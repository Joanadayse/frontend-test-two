import { FilteringContainer} from "./styled";

export function Filtering({ title, setTitle, order, setOrder }) {
  const handBuscarNome = (event) => {
    setTitle(event.target.value);
  };

  const handOrdem = (event) => {
    setOrder(event.target.value);
    
  };
  return (
    <FilteringContainer>
      <div className="inputName">
        <input
          type="text"
          placeholder="Buscar por nome"
          value={title}
          onChange={handBuscarNome}
        ></input>
      </div>

      <select className="select" value={order} onChange={handOrdem}>
        <option value="">Ordenar</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </select>
    </FilteringContainer>
  );
}
