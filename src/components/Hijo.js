import { useUserContext, useUserToggleContext } from "./UserProvider"

const Hijo = () => {

    const user = useUserContext();
    const cambiarLogin = useUserToggleContext();
  return (
    <div>
        <h2>Componente Hijo</h2>
        {user && <p>hola{user.name}</p>}
        <button onClick={cambiarLogin}>Cambiar Login</button>
    </div>
  )
}

export default Hijo