import {useState, useEffect} from "react"
import { db } from "../config/Firebase"
import { collection, getDocs } from "firebase/firestore"
import { Button } from "react-bootstrap"

const Admin = () => {
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
    }, [])

    console.log(reservas)
  return (
    
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
  )
}

export default Admin