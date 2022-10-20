import Image from 'next/image'

import ScooterX11_2 from "../../public/images/scooters/X11_2.png"
import ScooterM21 from "../../public/images/scooters/MC21.png"
import ScooterMC20 from "../../public/images/scooters/MC20.png"
import ScooterX7 from "../../public/images/scooters/X7.png"
import ScooterX11 from "../../public/images/scooters/X11.png"

import { ScooterImg, ScootersDiv, ScootersS } from "./style.module.scss"

export default function Scooters(props) {
    return (
        <section className={ScootersS}>
            <h2>Scooters Elétricas Novas e usadas a partir de R$ 5.998,00</h2>
            <div className={ScootersDiv}>
                {
                    [
                        {
                            img: ScooterX11,
                            title: "Scooter X11"
                        },
                        {
                            img: ScooterX7,
                            title: "Scooter X7"
                        },
                        {
                            img: ScooterMC20,
                            title: "Scooter MC20"
                        },
                        {
                            img: ScooterX11_2,
                            title: "Scooter X11"
                        },
                        {
                            img: ScooterM21,
                            title: "Scooter MC21"
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