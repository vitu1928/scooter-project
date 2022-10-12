import Image from "next/image"

import WhatsappButton from "../whatsappbutton"
import ScooterI from "../../public/images/scooters/scooter1.png"
import { WhatsappButton as WhatsappButtonS } from '../../styles/whatsappbutton.module.scss'

export default function Init(props) {
    return(
        <section {...props}>
          <div id="separation">
            <h1>
              Scooters Elétricas<br /><span>Experimente o novo</span>
            </h1>
            <div id="options">
              <p>✔️Parcelamento em até 18x Cartão de Crédito;</p>
              <p>✔️Diversas cores disponíveis;</p>
              <p>✔️Carregamento rápido;</p>
              <p>✔️Facilidade na hora de ir e vir.</p>
              <p>✔️Garantia</p>
              <p>Os melhores preços você encontra na Scooter Elétrica</p>
            </div>
            <WhatsappButton className={WhatsappButtonS}>
              Fale com nossa equipe agora
            </WhatsappButton>
          </div>
          <Image
            src={ScooterI}
            width={440}
            height={348}
          />
        </section>
    )
}