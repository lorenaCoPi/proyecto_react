const Card = (listCharacter) => {
      return (
          <div className="cardList">
            <ul className="cards" key={listCharacter.listCharacter.id}>
              <li>Id: {listCharacter.listCharacter.id}</li><br/>
              <li>Nombre: {listCharacter.listCharacter.name}</li><br/>
              <li>Especie: {listCharacter.listCharacter.species}</li><br/>
              <li>Estado: {listCharacter.listCharacter.status}</li><br/>
              <li><img src={listCharacter.listCharacter.image} alt="" /></li><br/>
            </ul>
          </div>
      );
    }

  export default Card