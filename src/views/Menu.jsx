import { useState, useEffect } from "react";
import { db } from "../config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import {Button, Card, CardGroup} from "react-bootstrap"

const Menu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const getMenu = async() => {
            try {
                const collectionRef = collection(db, "Menu");
                const response = await getDocs(collectionRef);
                
                const docs = response.docs.map((doc) => {
                    const data = doc.data() // la informacion de cada documento que guarda firestore
                    return data
                })

                setMenu(docs);

            } catch (error) {
                console.log(error)
            }
        }
        getMenu()
    }, [])



  return (
    <section>
        <h1 className="text-center">Menu</h1>
        <CardGroup className="justify-content-center mt-5">
            {menu.map((plato) => (
                <div key={plato.id} className="mx-3 ms-3">
                    <Card style={{width: "18rem", height: "420px"}}>
                        <Card.Img style={{height: "200px"}} variant="top" src={plato.imagen} alt={plato.nombre} />
                        <Card.Body>
                            <Card.Title>{plato.nombre.toUpperCase()}</Card.Title>
                            <Card.Text style={{height: "100px"}}>{plato.detalle}</Card.Text>
                            <Button variant="success">Precio: ${plato.precio} clp</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
            
        </CardGroup>
    </section>
  )
}

export default Menu