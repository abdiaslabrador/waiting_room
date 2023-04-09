import {
  ADD_PATIENT,
  INCREMENT,
  // UPDATE_CURRENCY,
  // LOADING_FORM,
  // LOADING_CURRENCY,
  // UPDATE_MSJ_SUCCESS,
  // UPDATE_MSJ_ERROR,
  // CURRENCY_ERROR,
} from "./inappointType";
  import { PatientInf } from "@/interfaces/patient";
  
  type Action =
  
    | {
        type: "ADD_PATIENT";
        wtgList: any,
      }
    | {
        type: "INCREMENT";
      }
    // | {
    //   type: "UPDATE_CURRENCY";
    //   currency: CurrencyInf | null;
    //   msjSuccess : string,
    //   msjError : string,
    //   loadingForm : boolean,
    //   }
    // | {
    //   type: "LOADING_FORM";
    //   loadingForm: boolean;
    //   }
    // | {
    //   type: "LOADING_CURRENCY";
    //   loadingCurrency: boolean;
    //   }
    // | {
    //     type: "CURRENCY_ERROR";
    //     currency?: CurrencyInf | null;
    //   }
    // | {
    //   type: "UPDATE_MSJ_SUCCESS";
    //   msjSuccess : string,
    // }
    // | {
    //   type: "UPDATE_MSJ_ERROR";
    //   msjError : string,
    // }
    ;
    
    
  const currencyReducer = (state: any = {}, action: Action) => {
    switch (action.type) {
      case ADD_PATIENT:
        return {
          ...state,
          wtgList: action.wtgList,
        };
          case INCREMENT:
          return {
            ...state,
            num: state.num + 1,
          };
          // case CURRENCY_ERROR:
          // return {
          //   ...state,
          //   currency:  null,
          // };
          // case LOADING_FORM:
          // return {
          //   ...state,
          //   loadingForm: action.loadingForm,
          // };
          // case LOADING_CURRENCY:
          // return {
          //   ...state,
          //   loadingCurrency: action.loadingCurrency,
          // };
          // case UPDATE_MSJ_SUCCESS:
          //   return {
          //     ...state,
          //     msjSuccess: action.msjSuccess,
          //   };
          // case UPDATE_MSJ_ERROR:
          //   return {
          //     ...state,
          //     msjError: action.msjError,
          //   };

      default:
        return state;
    }
  };
  
  export default currencyReducer;
  