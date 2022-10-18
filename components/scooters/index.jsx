import Image from 'next/image'

import ScooterMC20 from "../../public/images/scooters/scooterMC20.png"
import Scooters9 from "../../public/images/scooters/scooters9.png"
import Scooterx11 from "../../public/images/scooters/scooterx11.png"

import { ScooterImg, ScootersDiv, ScootersS } from "./style.module.scss"

export default function Scooters(props) {
    return (
        <section className={ScootersS}>
            <h2>Scooters Elétricas Novas e usadas a partir de R$ 4.998,00</h2>
            <div className={ScootersDiv}>
                {
                    [
                        {
                            img: Scooters9,
                            title: "Scooter s9"
                        },
                        {
                            img: ScooterMC20,
                            title: "Scooter MC20"
                        },
                        {
                            img: Scooterx11,
                            title: "Scooter x11"
                        }
                    ].map(({ img, title }, i) => {
                        return <div className={ScooterImg} key={i}>
                            <Image
                                src={img}
                                key={i}
                                layout="responsive"

                            />
                            <p>{title}</p>
                        </div>
                    })
                }
            </div>
        </section>
    )
}