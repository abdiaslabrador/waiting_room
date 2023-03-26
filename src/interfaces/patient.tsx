export  interface PatientInf{
    num : number,
    name : string,
    last_name : string,
    ci: string,
    description: string,
    price: number,
}

export  interface waitingContextInf{
    wtgList: PatientInf[],
    msjSuccess : string,
    msjError : string,
    loadingForm: boolean,
    addPatientFn(patient : PatientInf):void,
    
}