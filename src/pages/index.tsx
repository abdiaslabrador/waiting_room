import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import patientInfo from '@/styles/PatientInfo.module.css';
import { Modal, Loading, } from "@nextui-org/react";
import ModalCreateP from '@/components/modalCreateP';
import WaitingRoomProvider from '@/context/inappoint/inappointState';
import WaitingRoom from '@/components/waiting/waiting';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="lista de espera" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
      <WaitingRoomProvider>
      
         <div className={patientInfo["navbar"]}>
         <ModalCreateP/>
            <div>guardar</div>
         </div>
         {/* en el consultorio  */}
        <div className={patientInfo["squart-appnt"]}>
          <div className={patientInfo["patient-title"]}>
            En el consultorio
          </div>
          <div className={`${patientInfo["in-appnt"]}`}>
            <div className={ `${patientInfo["patient-item"]}` }>
                  <div className={ `${patientInfo["patient-item--item"]}` } >5</div>
                  <div className={ `${patientInfo["patient-item--item"]}` } >Pepe asdf</div>
                  <div className={ `${patientInfo["patient-item--item"]}` } >Labrador asdfs</div>
                  <div className={ `${patientInfo["patient-item--item"]}` }>7895662</div>
                  <div className={ `${patientInfo["patient-item--item"]}` }> |^ hacer click </div>
                  <div className={ `${patientInfo["patient-item--item"]}` }>X</div>
                  <div className={ `${patientInfo["patient-item--item"]}` }>LÁPIZ</div>
                  <div className={ `${patientInfo["patient-item--item"]}` }>FINALIZAR</div>
                  <div className={ `${patientInfo["patient-item--item"]}` }>DEVOLVER</div>
                  <div className={ `${patientInfo["patient-item--item"]}` }>RAYO</div>
            </div>
          </div>
        </div>

        {/* en la sala de espera */}
        <div className={patientInfo["squart-appnt"]}>
          <div className={patientInfo["patient-title"]}>
            En la sala
          </div>
          <div className={`${patientInfo["in-appnt"]}`}>
            <WaitingRoom/>
          </div>
        </div>
        
        {/* pacientes vistos */}
        <div className={patientInfo["squart-appnt"]}>
          <div className={patientInfo["patient-title"]}>
            Vistos
          </div>
          <div className={`${patientInfo["in-appnt"]}`}>
            <div className={ `${patientInfo["patient-item"]}` }>
                <div className={ `${patientInfo["patient-item--item"]}` } >5</div>
                <div className={ `${patientInfo["patient-item--item"]}` } >Pepe asdf</div>
                <div className={ `${patientInfo["patient-item--item"]}` } >Labrador asdfs</div>
                <div className={ `${patientInfo["patient-item--item"]}` }>7895662</div>
                <div className={ `${patientInfo["patient-item--item"]}` }> |^ hacer click </div>
                <div className={ `${patientInfo["patient-item--item"]}` }>X</div>
                <div className={ `${patientInfo["patient-item--item"]}` }>LÁPIZ</div>
                <div className={ `${patientInfo["patient-item--item"]}` }>DEVOLVER</div>
            </div>
            <div className={ `${patientInfo["patient-item"]}` }>
                <div className={ `${patientInfo["patient-item--item"]}` } >5</div>
                <div className={ `${patientInfo["patient-item--item"]}` } >Pepe asdf</div>
                <div className={ `${patientInfo["patient-item--item"]}` } >Labrador asdfs</div>
                <div className={ `${patientInfo["patient-item--item"]}` }>7895662</div>
                <div className={ `${patientInfo["patient-item--item"]}` }> |^ hacer click </div>
                <div className={ `${patientInfo["patient-item--item"]}` }>X</div>
                <div className={ `${patientInfo["patient-item--item"]}` }>LÁPIZ</div>
                <div className={ `${patientInfo["patient-item--item"]}` }>DEVOLVER</div>
            </div>
            <div className={ `${patientInfo["patient-item"]}` }>
                <div className={ `${patientInfo["patient-item--item"]}` } >5</div>
                <div className={ `${patientInfo["patient-item--item"]}` } >Pepe asdf</div>
                <div className={ `${patientInfo["patient-item--item"]}` } >Labrador asdfs</div>
                <div className={ `${patientInfo["patient-item--item"]}` }>7895662</div>
                <div className={ `${patientInfo["patient-item--item"]}` }> |^ hacer click </div>
                <div className={ `${patientInfo["patient-item--item"]}` }>X</div>
                <div className={ `${patientInfo["patient-item--item"]}` }>LÁPIZ</div>
                <div className={ `${patientInfo["patient-item--item"]}` }>DEVOLVER</div>
            </div>
            <div className={ `${patientInfo["patient-item"]}` }>
                <div className={ `${patientInfo["patient-item--item"]}` } >5</div>
                <div className={ `${patientInfo["patient-item--item"]}` } >Pepe asdf</div>
                <div className={ `${patientInfo["patient-item--item"]}` } >Labrador asdfs</div>
                <div className={ `${patientInfo["patient-item--item"]}` }>7895662</div>
                <div className={ `${patientInfo["patient-item--item"]}` }> |^ hacer click </div>
                <div className={ `${patientInfo["patient-item--item"]}` }>X</div>
                <div className={ `${patientInfo["patient-item--item"]}` }>LÁPIZ</div>
                <div className={ `${patientInfo["patient-item--item"]}` }>DEVOLVER</div>
            </div>
            <div className={ `${patientInfo["patient-item"]}` }>
                <div className={ `${patientInfo["patient-item--item"]}` } >5</div>
                <div className={ `${patientInfo["patient-item--item"]}` } >Pepe asdf</div>
                <div className={ `${patientInfo["patient-item--item"]}` } >Labrador asdfs</div>
                <div className={ `${patientInfo["patient-item--item"]}` }>7895662</div>
                <div className={ `${patientInfo["patient-item--item"]}` }> |^ hacer click </div>
                <div className={ `${patientInfo["patient-item--item"]}` }>X</div>
                <div className={ `${patientInfo["patient-item--item"]}` }>LÁPIZ</div>
                <div className={ `${patientInfo["patient-item--item"]}` }>DEVOLVER</div>
            </div>
          </div>
        </div>
      </WaitingRoomProvider>
      </main>
    </>
  )
}
