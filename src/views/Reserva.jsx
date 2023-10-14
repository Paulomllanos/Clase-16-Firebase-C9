import { useState, useEffect } from "react";
import { db } from "../config/Firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Button } from "react-bootstrap";


const Reserva = () => {

    const valorInicial = {
        nombre: "",
        email: "",
        mesa: "",
        fecha: ""
    }

    const [cliente, setCliente] = useState(valorInicial)
   

    const capturarInputs = (e) => {
        e.preventDefault()

        const {name, value} = e.target;

        setCliente({
            ...cliente,
            [name]: value
        })
    }
    

    const reservar = async(e) => {
        e.preventDefault()
        
        try {
            const collectionRef = collection(db, "Reservas");
            await addDoc(collectionRef, {
                ...cliente
            })
        } catch (error) {
            console.log(error)
        }
        setCliente({...valorInicial})
    }

    const [reservas, setReservas] = useState([])

    useEffect(() => {
        const getReservas = async() => {
            try {
                const collectionRef = collection(db, "Reservas");
                const response = await getDocs(collectionRef);
                
                const docs = response.docs.map((doc) => {
                    const data = doc.data() // la informacion de cada documento que guarda firestore
                    data.id = doc.id;
                    return data;
                })

                setReservas(docs);

            } catch (error) {
                console.log(error)
            }
        }
        getReservas()
    }, [reservas])

    console.log(reservas)
    


  return (
    <section>
        <h1>Realizar una Reserva</h1>
        {/* Form */}
        <form onSubmit={reservar}>
            <div>
                <input type="text" name="nombre" placeholder="Ingresa tu nombre!" value={cliente.nombre} onChange={capturarInputs}/>
                <input type="text" name="email" placeholder="Ingresa tu email!" value={cliente.email} onChange={capturarInputs}/>
                <input type="text" name="mesa" placeholder="Ingresa la mesa!" value={cliente.mesa} onChange={capturarInputs}/>
                <input type="date" name="fecha" value={cliente.fecha} onChange={capturarInputs}/>
            </div>
            <button>Reservar</button>
        </form>
        <div className="container">
            <table>
                 <thead>
                    <tr>
                        <th>#</th>
                        <th>Cliente</th>
                        <th>Email</th>
                        <th>Mesa</th>
                        <th>Fecha</th>
                        <th>Action</th>
                    </tr>   
                </thead>
                    
                {reservas.map(reserva => (
                    <tbody key={reserva.id}>
                        <tr>
                            <td>{reserva.id}</td>
                            <td>{reserva.nombre}</td>
                            <td>{reserva.email}</td>
                            <td>{reserva.mesa}</td>
                            <td>{reserva.fecha}</td>
                            <td>
                                <Button variant="warning">Editar</Button>
                                <Button variant="danger">Eliminar</Button>
                            </td>
                        </tr>
                    </tbody>
                ))} 
            </table>
        </div>
    </section>
  )
}

export default Reserva



