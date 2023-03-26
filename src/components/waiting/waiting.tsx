import React, {Fragment, useContext, useEffect, useState} from "react";
import { Modal, Loading, Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import patientInfo from '@/styles/PatientInfo.module.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { waitingContext } from "@/context/inappoint/waitingContext";

const WaitingRoom = () => {
  const { wtgList } = useContext(waitingContext);

  return (
    <>
        {wtgList.map((patient, index) => (
        <div key={index} className={ `${patientInfo["patient-item"]}` }>
            <div className={ `${patientInfo["patient-item--item"]}` } >n</div>
            <div className={ `${patientInfo["patient-item--item"]}` } >{patient.name}</div>
            <div className={ `${patientInfo["patient-item--item"]}` } >{patient.last_name}</div>
            <div className={ `${patientInfo["patient-item--item"]}` }>{patient.ci}</div>
            <div className={ `${patientInfo["patient-item--item"]}` }> info click </div>
            <div className={ `${patientInfo["patient-item--item"]}` }>X</div>
            <div className={ `${patientInfo["patient-item--item"]}` }>LÁPIZ</div>
            <div className={ `${patientInfo["patient-item--item"]}` }>PLAY</div>
            <div className={ `${patientInfo["patient-item--item"]}` }>RAYO</div>
        </div>
        ))}
    </>
  );
};

export default WaitingRoom;