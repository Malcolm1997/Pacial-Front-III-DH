
const Card = ({ nombre, apellido, edad }) => {
    return (
        <div>
            <h1>Tu nombre es: {nombre}</h1>
            <h2>Tu apellido es: {apellido}</h2>
            <h3>Tu edad es: {edad}</h3>
        </div>
    )
}

export default Card