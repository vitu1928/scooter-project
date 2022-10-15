import Head from 'next/head'
import Image from 'next/image'

import { Parallax as ParallaxS } from '../styles/parallax.module.scss'
import { WhatsappButton as WhatsappButtonS } from '../styles/whatsappbutton.module.scss'
import { WhatsappFixed as WhatsappFixedS } from '../styles/whatsappfixed.module.scss'
import { Scooters as ScooterS } from '../styles/scooters.module.scss'
import { Init as InitS } from '../styles/init.module.scss'

import Whatsapp from "../public/images/whatsapp.png"
import Logo from "../public/images/logo/logo_circular_df.png"
import Prancheta from "../public/images/logo/prancheta.png"
// import BeepBeep from "../public/images/BeepBeep.png"

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
            width={1000}
            height={1000}
          />
        </div>
        <div className="elementor-shape">⠀</div>
      </header>
      
      <a className={WhatsappFixedS} href="https://api.whatsapp.com/send?phone=5521964043012">
        <Image
          src={Whatsapp}
          width={500}
          height={430}
        />
      </a>
      <main>
        <h2>Praticidade e economia com a qualidade que só a MotoPlay tem.</h2>
        <Scooters className={ScooterS}/>
        <WhatsappButton className={WhatsappButtonS}>Fale com nossa equipe</WhatsappButton>
        <Parallax className={ParallaxS}/>
        <Init className={InitS}/>
        <Benefits />
      </main>
       
      <footer>
        <Image
          src={Prancheta}
          width={150}
          height={150}
        />
        <a href="https://api.whatsapp.com/send?phone=5521964043012">
          <Image
            src={Whatsapp}
            width={80}
            height={60}
          />
        </a>
      </footer>
    </>
  )
}
