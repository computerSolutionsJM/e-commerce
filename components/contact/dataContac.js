import { Col } from "react-bootstrap"
import { MdLocationOn, MdPhone, MdWatchLater, MdMail } from "react-icons/md"

import styles from "../../styles/contact/dataContact.module.css"

const DataContac = () => {
      return (
            <Col>
                  <div className={styles.main_data_contact}>
                        <div className={styles.main_data_contact_1}>
                              <MdPhone style={{ width: 50, height: 50 }} color="#7fad39" />
                              <h3>Telefono</h3>
                              <span>+57 305 298 23 60</span>
                        </div>
                        <div className={styles.main_data_contact_1}>
                              <MdLocationOn style={{ width: 50, height: 50 }} color="#7fad39" />
                              <h3>Dirección</h3>
                              <span>Cra 55 N° 2a - 06 </span>
                        </div>
                        <div className={styles.main_data_contact_1}>
                              <MdWatchLater style={{ width: 50, height: 50 }} color="#7fad39" />
                              <h3>Horario</h3>
                              <span>7:00 AM a 10:00 PM</span>
                        </div>
                        <div className={styles.main_data_contact_1}>
                              <MdMail style={{ width: 50, height: 50 }} color="#7fad39" />
                              <h3>Correo</h3>
                              <span>hello@colorlib.com</span>
                        </div>
                  </div>
                <div>
                      <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6455.880502845818!2d-73.50535676444572!3d4.060467586147224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e29590a82353b%3A0xf0224d59f8db5bbe!2sSuper%20mercado%20El%20Tr%C3%A9bol!5e0!3m2!1ses!2sco!4v1610068601949!5m2!1ses!2sco"
                            style={{ height: 500, width: "100%", border: 0 }}
                      ></iframe>
                </div>
            </Col>
      )
}

export default DataContac
