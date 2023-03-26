import { createContext } from "react";
import {waitingContextInf} from "@/interfaces/patient";
 
export const waitingContext = createContext<waitingContextInf>({} as waitingContextInf);
