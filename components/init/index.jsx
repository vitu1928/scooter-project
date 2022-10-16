import Image from "next/image"

import WhatsappButton from "../whatsappbutton"

import ScooterI from "../../public/images/scootersLocation.png"
import CheckIcon from "../../public/images/check.png"

import { ButtonWpp, ImageS, WhatsappButton as WhatsappButtonS, InitS, SeparationS } from './style.module.scss'

export default function Init() {
  return (
    <section className={InitS}>
      <div className={ImageS}>
        <Image
          src={ScooterI}
          width={1000}
          height={892}
          objectFit="fill"
        />
      </div>
      <div className={SeparationS}>
        <h1>
          Scooters Elétricas
        </h1>
        <div className="options">
          <ul>
            <li>
              <span className="checkIcon">
                <Image
                  src={CheckIcon}
                  width={100}
                  height={100}
                />
              </span>
              Pronta Entrega</li>
            <li>
              <span className="checkIcon">
                <Image
                  src={CheckIcon}
                  width={100}
                  height={100}
                />
              </span>
              Garantia de Fábrica</li>
            <li>
              <span className="checkIcon">
                <Image
                  src={CheckIcon}
                  width={100}
                  height={100}
                />
              </span>
              Parcelamento em até 18x no cartão de crédito</li>
            <li>
              <span className="checkIcon">
                <Image
                  src={CheckIcon}
                  width={100}
                  height={100}
                />
              </span>
              Entrega para todo o Brasil</li>
            <li>
              <span className="checkIcon">
                <Image
                  src={CheckIcon}
                  width={100}
                  height={100}
                />
              </span>
              100% Elétrica e Economica</li>
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