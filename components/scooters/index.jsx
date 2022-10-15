import Image from 'next/image'

import PatineteP10 from "../../public/images/scooters/PatineteP10.png"
import ScooterLN20 from "../../public/images/scooters/ScooterLN20.png"
import ScooterM2 from "../../public/images/scooters/scooterM2.png"
import Scooters9 from "../../public/images/scooters/scooters9.png"
import ScooterMC20 from "../../public/images/scooters/scooterMC20.png"
import Scooterx11 from "../../public/images/scooters/scooterx11.png"

import { ScootersDiv, ScooterImg } from "../../styles/scooters.module.scss"

export default function Scooters(props) {
    function mapear({img, title}, i) {
        return  <div className={ScooterImg} key={i}>
            <Image
                src={img}
                key={i}
                width={1000}
                height={1000}
            />
            <p>{title}</p>
        </div>
    }

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
                        }
                    ].map(mapear)
                }
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
                    ].map(mapear)
                }
            </div>
        </section>
    )
}