import { useRouter } from "next/router"
import { Modal, Button } from "react-bootstrap"

const ModalConfirm = ({ show, setShow }) => {
      const router = useRouter()
      
      const handleClose = () => {
            setShow(false)
            router.push('/')
      }

      return (
            <Modal show={show} onHide={handleClose} animation={false} centered>
                  <Modal.Header closeButton style={{ backgroundColor: "#d4edda" }}>
                        <Modal.Title style={{ color: "green" }}>Bien Hecho!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Tu Pedido ha sido enviado con Exito</Modal.Body>
                  <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                              Cerrar
                        </Button>
                  </Modal.Footer>
            </Modal>
      )
}

export default ModalConfirm
