interface IVillagers {
  name: string;
  gender: string;
  // image_url: string;
  species: string;
}

function Villagers({ name, gender, species }: IVillagers) {
  return (
    <div className="villagers">
      <h2>{name}</h2>
      <h4>성별 : {gender}</h4>
      <h4>종류 : {species}</h4>
      <br></br> <br></br>
    </div>
  );
}

export default Villagers;
