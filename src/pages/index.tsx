import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import patinetInfo from '@/styles/PatientInfo.module.css'

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
         <div className={patinetInfo["navbar"]}>
            <button>crear</button> 
            <div>guardar</div>
         </div>
         {/* en el consultorio  */}
        <div className={patinetInfo["squart-appnt"]}>
          <div className={patinetInfo["patient-title"]}>
            En el consultorio
          </div>
          <div className={`${patinetInfo["in-appnt"]}`}>
            <div className={ `${patinetInfo["patient-item"]}` }>
                  <div className={ `${patinetInfo["patient-item--item"]}` } >5</div>
                  <div className={ `${patinetInfo["patient-item--item"]}` } >Pepe asdf</div>
                  <div className={ `${patinetInfo["patient-item--item"]}` } >Labrador asdfs</div>
                  <div className={ `${patinetInfo["patient-item--item"]}` }>7895662</div>
                  <div className={ `${patinetInfo["patient-item--item"]}` }> |^ hacer click </div>
                  <div className={ `${patinetInfo["patient-item--item"]}` }>X</div>
                  <div className={ `${patinetInfo["patient-item--item"]}` }>LÁPIZ</div>
                  <div className={ `${patinetInfo["patient-item--item"]}` }>FINALIZAR</div>
                  <div className={ `${patinetInfo["patient-item--item"]}` }>DEVOLVER</div>
                  <div className={ `${patinetInfo["patient-item--item"]}` }>RAYO</div>
            </div>
          </div>
        </div>

        {/* en la sala de espera */}
        <div className={patinetInfo["squart-appnt"]}>
          <div className={patinetInfo["patient-title"]}>
            En la sala
          </div>
          <div className={`${patinetInfo["in-appnt"]}`}>
          <div className={ `${patinetInfo["patient-item"]}` }>
                <div className={ `${patinetInfo["patient-item--item"]}` } >100</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Abdias Daniel</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Labrador Peña</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>26185465</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }> |^ hacer click </div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>X</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>LÁPIZ</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>PLAY</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>RAYO</div>
            </div><div className={ `${patinetInfo["patient-item"]}` }>
                <div className={ `${patinetInfo["patient-item--item"]}` } >100</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Abdias Daniel</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Labrador Peña</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>26185465</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }> |^ hacer click </div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>X</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>LÁPIZ</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>PLAY</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>RAYO</div>
            </div><div className={ `${patinetInfo["patient-item"]}` }>
                <div className={ `${patinetInfo["patient-item--item"]}` } >100</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Abdias Daniel</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Labrador Peña</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>26185465</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }> |^ hacer click </div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>X</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>LÁPIZ</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>PLAY</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>RAYO</div>
            </div><div className={ `${patinetInfo["patient-item"]}` }>
                <div className={ `${patinetInfo["patient-item--item"]}` } >100</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Abdias Daniel</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Labrador Peña</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>26185465</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }> |^ hacer click </div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>X</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>LÁPIZ</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>PLAY</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>RAYO</div>
            </div><div className={ `${patinetInfo["patient-item"]}` }>
                <div className={ `${patinetInfo["patient-item--item"]}` } >100</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Abdias Daniel</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Labrador Peña</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>26185465</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }> |^ hacer click </div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>X</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>LÁPIZ</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>PLAY</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>RAYO</div>
            </div>
          </div>
        </div>
        
        {/* pacientes vistos */}
        <div className={patinetInfo["squart-appnt"]}>
          <div className={patinetInfo["patient-title"]}>
            Vistos
          </div>
          <div className={`${patinetInfo["in-appnt"]}`}>
            <div className={ `${patinetInfo["patient-item"]}` }>
                <div className={ `${patinetInfo["patient-item--item"]}` } >5</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Pepe asdf</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Labrador asdfs</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>7895662</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }> |^ hacer click </div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>X</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>LÁPIZ</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>DEVOLVER</div>
            </div>
            <div className={ `${patinetInfo["patient-item"]}` }>
                <div className={ `${patinetInfo["patient-item--item"]}` } >5</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Pepe asdf</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Labrador asdfs</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>7895662</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }> |^ hacer click </div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>X</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>LÁPIZ</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>DEVOLVER</div>
            </div>
            <div className={ `${patinetInfo["patient-item"]}` }>
                <div className={ `${patinetInfo["patient-item--item"]}` } >5</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Pepe asdf</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Labrador asdfs</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>7895662</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }> |^ hacer click </div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>X</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>LÁPIZ</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>DEVOLVER</div>
            </div>
            <div className={ `${patinetInfo["patient-item"]}` }>
                <div className={ `${patinetInfo["patient-item--item"]}` } >5</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Pepe asdf</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Labrador asdfs</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>7895662</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }> |^ hacer click </div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>X</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>LÁPIZ</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>DEVOLVER</div>
            </div>
            <div className={ `${patinetInfo["patient-item"]}` }>
                <div className={ `${patinetInfo["patient-item--item"]}` } >5</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Pepe asdf</div>
                <div className={ `${patinetInfo["patient-item--item"]}` } >Labrador asdfs</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>7895662</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }> |^ hacer click </div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>X</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>LÁPIZ</div>
                <div className={ `${patinetInfo["patient-item--item"]}` }>DEVOLVER</div>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
