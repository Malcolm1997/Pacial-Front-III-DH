import { useState } from "react";
import Card from "./Card";

const Form = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")    
    const [edad, setEdad] = useState("")
    const [datos, setDatos] = useState([])
    const [isError, setIsError] = useState(false)

    const handleNombre = (e) => {
        setNombre(e.target.value)
    }

    const hadleApellido = (e) => {
        setApellido(e.target.value)
    }

    const hadleEdad = (e) => {
        setEdad(e.target.value)
    }

    const hadleErrorNombre = () => {
        if (!nombre) {
            return false
        }

        let nombreTrim = nombre.trim()
        if (nombreTrim.length < 3) {
            return false
        } else {
            return true
        }
    }

    const hadleErrorApellido = () => {
        if (!apellido) {
            return false
        }
        let apellidoTrim = apellido.trim()
        if (apellidoTrim.length < 6) {
            return false
        } else {
            return true
        }
    }

    const hadleErrorEdad = () => {
        if (!edad) {
            return false
        }
        if (edad > 0 && edad < 100) {
            return true
        } else {
            return false
        }
    }

    const vaciarInputs = () => {
        setNombre("")
        setApellido("")
        setEdad("")
    }

    const hadleSubmit = (e) => {
        e.preventDefault()

        if (hadleErrorNombre() && hadleErrorApellido() && hadleErrorEdad()) {
            setDatos([...datos, {nombre, apellido, edad}])
            setIsError(false)
        } else {
            setIsError(true)
        }
        vaciarInputs()
    }

    return (
        <>
            <form>
                <label>Nombre:</label>
                <input type="text" name="nombre" onChange={handleNombre}  value={nombre}/>
                <label>Apellido:</label>
                <input type="text" name="apellido"onChange={hadleApellido} value={apellido}/>
                <label>Edad:</label>
                <input type="number" name="edad" onChange={hadleEdad} value={edad}/>
                <button onClick={hadleSubmit} type="submit">Enviar</button>

                {isError && <p>Por favor chequea que la información sea correcta</p>}
            </form>

            {datos.map( (dato, index) => <Card key={index} nombre={dato.nombre} apellido={dato.apellido} edad={dato.edad} />)}
        </>
    );
};

export default Form;
