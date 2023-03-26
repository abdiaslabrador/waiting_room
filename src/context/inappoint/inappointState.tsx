import React, {useContext, useReducer} from "react";
import inappointReducer from './inappointReducer';
import {waitingContext} from './waitingContext';
import {PatientInf} from '@/interfaces/patient';
// import {authContext} from '../../login/authContext';
// import {errorServerContext} from '../../error/errorServerContext';
// import customAxios from "../../../config/axios";


import {
    ADD_PATIENT,
    UPDATE_INAPPOINT,
    INAPPOINT_ERROR,
    LOADING_FORM,
    LOADING_INAPPOINT,
    UPDATE_MSJ_SUCCESS,
    UPDATE_MSJ_ERROR,
  } from "./inappointType";

interface props {
  children: JSX.Element | JSX.Element[];
}

const WaitingRoomProvider = ({ children }: props) => {

  const initialState = {
    wtgList: [],
    msjSuccess : "",
    msjError : "",
    loadingForm: false,
    loadingWtgList: true,
  };

  const [state, dispatch] = useReducer(inappointReducer, initialState);
  
  function addPatientFn(patient : PatientInf){
      
      let arrayCopy : PatientInf[] = [...state.wtgList, patient];
      console.log(arrayCopy[arrayCopy.length].num)
      // arrayCopy[arrayCopy.length].num =  arrayCopy.length + 1;

      dispatch({
        type: ADD_PATIENT,
        wtgList: [...arrayCopy],
      })
  }

  return (
    <waitingContext.Provider
      value={{
        wtgList: state.wtgList,
        msjSuccess : state.msjSuccess,
        msjError : state.msjError,
        loadingForm: state.loadingForm,
        addPatientFn,
      }}
    >
      {children}
    </waitingContext.Provider>
  );
};

export default WaitingRoomProvider;
