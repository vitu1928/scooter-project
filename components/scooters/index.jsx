import Image from 'next/image'

// Scooters
import Scooter1 from "../../public/images/scooters/01.png"
import Scooter2 from "../../public/images/scooters/02.png"
import Scooter3 from "../../public/images/scooters/03.png"
import Scooter4 from "../../public/images/scooters/04.png"
import Scooter5 from "../../public/images/scooters/05.png"
import Scooter6 from "../../public/images/scooters/06.png"

export default function Scooters(props) {
    return (
        <section {...props}>
            <h2>Diversos modelos para você</h2>
            <div id="scooters">
                {[Scooter1, Scooter2, Scooter3, Scooter4, Scooter5, Scooter6].map(
                    (img, i) =>
                        <div class="scooterimg">
                            <Image
                                src={img}
                                key={i}
                                width={350}
                                height={350}
                            />
                        </div>
                )}
            </div>
        </section>
    )
}