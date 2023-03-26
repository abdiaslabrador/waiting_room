import React, {Fragment, useContext, useEffect, useState} from "react";
import { Modal, Loading, Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import patientInfo from '@/styles/PatientInfo.module.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { waitingContext } from "@/context/inappoint/waitingContext";

const ModalCreateP = () => {
  const { addPatientFn } = useContext(waitingContext);

  const router = useRouter();
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  
  useEffect(()=>{
    // async function teethLoading(){
    //   if(patient){
    //     await getTeethFn()
    //   }
    // }
    // teethLoading()
  },[])

  const initialValues = {
    name: '',
    last_name: ''  ,
    ci: '',
    description: '',
    price: 0,
 }

 const validationEmpty = (value : any) => {
    let error;

    if (!value.trim()){
      error = "Campo requerido";
    }
    return error;
 }

 const formHandler = (values : any, resetForm : any) =>{
  
    addPatientFn(values);
    resetForm({ values: "" });
 }

  return (
    <>
    <Button onClick={handler} >crear</Button>

        <Modal
            animated={false}
            width="800px"
            css={{ height: "600px", backgroundColor: "#302F2F" }}
            closeButton
            preventClose
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
            >
          <Modal.Header>
            <div className={patientInfo["title"]}>Ingrese datos del paciente</div> 
          </Modal.Header>
          <Modal.Body>
          <Formik
                initialValues={initialValues}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(values, { resetForm }) =>
                    formHandler(values, resetForm)
                }
          >
          {({ values }) => (
            <Form>
                <div className={patientInfo["form-row"]}>
                    <div className={patientInfo["form-row--item"]}>
                        <label  style={{color: "white"}}>Nombres:</label>
                        <Field style={{color: "white"}} type="text" name="name" placeholder="Nombres" validate={validationEmpty}/>
                    </div>

                    <div className={patientInfo["form-row--item"]}>
                        <label  style={{color: "white"}}>Apellidos:</label>
                        <Field style={{color: "white"}} type="text" name="last_name" placeholder="Apellidos" validate={validationEmpty}/>
                    </div>
                </div>

                <div className={patientInfo["form-row"]}>
                    <div className={patientInfo["form-row--item"]}>
                        <label htmlFor="" style={{color: "white"}}>CI:</label>
                        <Field style={{color: "white"}} type="text" name="ci" placeholder="CI" validate={validationEmpty}/>
                    </div>
                    <div className={patientInfo["form-row--item"]}>
                        <label htmlFor="" style={{color: "white"}}>Monto:</label>
                        <Field style={{color: "white"}} type="number" name="price" placeholder="Monto pagado" min="0.01" step="0.01"/>
                    </div>
                </div>

                

                <label htmlFor="" style={{color: "white"}}>Motivo:</label>
                <Field
                    as="textarea"
                    type="text"
                    name="description"
                    placeholder="motivo consulta"
                    style={{ resize: "none", color: "white" }}
                    rows={5}
                    cols={23}
                />
                
                <div className={patientInfo["button_group"]}>
                    <Button  type="submit" color="success">Agregar</Button>
                </div>
            </Form>)}
            </Formik>
          </Modal.Body>
        </Modal>
    </>
  );
};

export default ModalCreateP;