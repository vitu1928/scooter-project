import Image from 'next/image'

// Cards
import MasterCard from "../../public/images/cards/card1.jpg"
import Visa from "../../public/images/cards/card2.jpg"
import Hipercard from "../../public/images/cards/card3.png"
import Elo from "../../public/images/cards/card4.png"
import AmericanExpress from "../../public/images/cards/card5.jpg"
import DinnerClub from "../../public/images/cards/card6.png"
import MercadoPago from "../../public/images/cards/mercado_pago.png"

export default function Cards(props) {
    return(
        <section {...props}>
            <p>Entregamos para Todo Brasil com Condições Especiais de Pagamento!</p>
            <div id="cards">
                {
                    [
                        { card: MasterCard },
                        { card: Visa },
                        {
                            card: Hipercard,
                            w: 80,
                            h: 35
                        },
                        {
                            card: Elo,
                            w: 80,
                            h: 30
                        },
                        { card: AmericanExpress },
                        {
                            card: DinnerClub,
                            w: 80,
                            h: 80
                        },
                        {
                            card: MercadoPago,
                            x: 80,
                            y: 80
                        }
                    ].map(
                        ({ card, w=80, h=55}, i) =>
                        <Image
                            src={card}
                            key={i}
                            objectFit="fill"
                            width={w}
                            height={h}
                        />
                    )
                }
            </div>
          </section>
    )
}