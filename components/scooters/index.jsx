import Image from 'next/image'

import PatineteP10 from "../../public/images/scooters/PatineteP10.png"
import ScooterLN20 from "../../public/images/scooters/ScooterLN20.png"
import ScooterM2 from "../../public/images/scooters/scooterM2.png"
import Scooters8 from "../../public/images/scooters/scooters8.png"
import Scooters9 from "../../public/images/scooters/scooters9.png"
import Scooterx6 from "../../public/images/scooters/scooterx6.png"
import Scooterx11 from "../../public/images/scooters/scooterx11.png"

import { ScootersDiv, ScooterImg } from "../../styles/scooters.module.scss"

export default function Scooters(props) {
    return (
        <section {...props}>
            <h2>Scooters Elétricas Novas e usadas a partir de 4,990</h2>
            <div className={ScootersDiv}>
                {
                    [
                        {
                            img: PatineteP10,
                            title: "Patinete P10"
                        },
                        {
                            img: ScooterLN20,
                            title: "Scooter LN20"
                        },
                        {
                            img: ScooterM2,
                            title: "Scooter M2"
                        },
                        {
                            img: Scooters8,
                            title: "Scooter s8"
                        },
                        {
                            img: Scooters9,
                            title: "Scooter s9"
                        },
                        {
                            img: Scooterx6,
                            title: "Scooter x6"
                        },
                        {
                            img: Scooterx11,
                            title: "Scooter x11"
                        }
                    ].map(
                    ({img, title}, i) =>
                        <div class={ScooterImg} key={i}>
                            <Image
                                src={img}
                                key={i}
                                width={350}
                                height={350}
                            />
                            <p>{title}</p>
                        </div>
                )}
            </div>
        </section>
    )
}