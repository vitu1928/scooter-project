import Image from "next/image"

import WhatsappButton from "../whatsappbutton"

import CheckIcon from "../../public/images/check.png"
import ScooterI from "../../public/images/scootersLocation.png"

import { ButtonWpp, ImageS, InitS, SeparationS, WhatsappButton as WhatsappButtonS } from './style.module.scss'

export default function Init() {
  return (
    <section className={InitS}>
      <div className={ImageS}>
        <Image
          src={ScooterI}
          layout="responsive"
        />
      </div>
      <div className={SeparationS}>
        <h1>
          Scooters Elétricas
        </h1>
        <div className="options">
          <ul>
            {
              [
                "Pronta Entrega",
                "Garantia de Fábrica",
                "Parcelamento em até 18x no cartão de crédito",
                "Entrega para todo o Brasil",
                "100% Elétrica e Economica"
              ].map(text => 
                <li>
                  <span className="checkIcon">
                    <Image
                      src={CheckIcon}
                      layout="responsive"
                      />
                  </span>
                  {text}
                </li>
              )
            }
          </ul>
          {/* <p>Os melhores preços você encontra na Scooter Elétrica</p> */}
        </div>
      </div>
      <div className={ButtonWpp}>
        <WhatsappButton className={WhatsappButtonS}>
          Fale com nossa equipe
        </WhatsappButton>
      </div>

    </section>
  )
}