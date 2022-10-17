import Image from "next/image"

import { WhatsappFixedS } from "./style.module.scss"

import Whatsapp from "../../public/images/whatsapp.png"

export default function Whatsappfixed() {
    return (
        <a className={WhatsappFixedS} href="https://api.whatsapp.com/send?phone=5521964043012">
            <div>
                <Image
                    src={Whatsapp}
                    layout="responsive"
                />
            </div>
        </a>
    )
}