import { color } from "../Context/UseContext";
import { useContext } from "react";

const Profile = ({ user, Title }) => {
  const theme = useContext(color);
  return (
    <>
      <div className={theme ? "light" : "dark"}>
        <body className="body_profile">
          <Title />
          <h1>Perfil de usuario con ID: {user.id}</h1>
          <p>Email: {user.email}</p>
          <p>Nombre: {user.name}</p>
          <p>Edad: {user.age}</p>
        </body>
      </div>
    </>
  );
};

export default Profile;
