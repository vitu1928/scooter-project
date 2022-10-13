import Head from 'next/head'
import Image from 'next/image'

import { Benefits as BenefitsS } from '../styles/benefits.module.scss'
import { Parallax as ParallaxS } from '../styles/parallax.module.scss'
import { WhatsappButton as WhatsappButtonS } from '../styles/whatsappbutton.module.scss'
import { WhatsappFixed as WhatsappFixedS } from '../styles/whatsappfixed.module.scss'
import { Scooters as ScooterS } from '../styles/scooters.module.scss'
import { Init as InitS } from '../styles/init.module.scss'

import Whatsapp from "../public/images/whatsapp.png"
import Logo from "../public/images/logo/logo_circular_df.png"

import Benefits from '../components/benefits'
import Scooters from '../components/scooters'
import WhatsappButton from '../components/whatsappbutton'
import Parallax from '../components/parallax'
import Init from '../components/init'

export default function Home() {
  return (
    <>
      <Head>
        <title>MotoPlay</title>
        <meta name="description" content="MotoPlay" />
        <link rel="icon" href="images/prancheta.ico" />
      </Head>
      <header>
        <div className="motoplay">
          <Image src={Logo}
            width={200}
            height={200}
          />
        </div>
        <div className="elementor-shape">⠀</div>
      </header>
      
      <div className={WhatsappFixedS}>
        <Image
          src={Whatsapp}
          width={42}
          height={32}
        />
      </div>
      <main>
        <h2>Praticidade e economia com a qualidade que só a MotoPlay tem.</h2>
        <Scooters className={ScooterS}/>
        <WhatsappButton className={WhatsappButtonS}>QUERO SOLICITAR UM ORÇAMENTO</WhatsappButton>
        <Parallax className={ParallaxS}/>
        <Init className={InitS}/>
        <Benefits className={BenefitsS} />
      </main>
       
      <footer>
        {/* WhatsappButton */}
      </footer>
    </>
  )
}
