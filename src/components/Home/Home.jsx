import { color } from "../Context/UseContext";
import { useContext } from "react";
import ListApi from "../ApiConnect/Api";

function Home ({Title}) {
  const theme = useContext(color);
  return (
    <>
      <div className={theme ? "light" : "dark"}>
        <div>
        <Title/>
        <ListApi/>
      </div>
      </div>
      
    </>
  );
}

export default Home;
