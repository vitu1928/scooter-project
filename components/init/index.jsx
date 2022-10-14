import Image from "next/image"

import WhatsappButton from "../whatsappbutton"
import ScooterI from "../../public/images/scooters/scooter1.png"
import { Image as ImageS, WhatsappButton as WhatsappButtonS } from '../../styles/whatsappbutton.module.scss'

export default function Init(props) {
    return(
        <section {...props}>
          <div className="separation">
            <h1>
              Scooters Elétricas
            </h1>
            <div className="options">
              <ul>
                <li>Pronta Entrega</li>
                <li>Garantia de Fábrica</li>
                <li>Parcelamento em até 18x no cartão de crédito</li>
                <li>Entrega para todo o Brasil</li>
                <li>100% Elétrica e Economica</li>
              </ul>
              {/* <p>Os melhores preços você encontra na Scooter Elétrica</p> */}
            </div>
            <WhatsappButton className={WhatsappButtonS}>
              Fale com nossa equipe agora
            </WhatsappButton>
          </div>
          <Image
            src={ScooterI}
            width={440}
            height={348}
            className={ImageS}
          />
        </section>
    )
}