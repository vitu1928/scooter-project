import Head from 'next/head'
import Image from 'next/image'

import Logo from "../public/images/logo/logo_circular_df.png"
import Prancheta from "../public/images/logo/prancheta.png"
import Whatsapp from "../public/images/whatsapp.png"

import Benefits from '../components/benefits'
import Init from '../components/init'
import Parallax from '../components/parallax'
import Scooters from '../components/scooters'
import WhatsappButton from '../components/whatsappbutton'
import WhoWeAre from '../components/whoweare'
import Whatsappfixed from '../components/whtsappfixed'

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
            layout="responsive"
            
          />
        </div>
        <div className="elementor-shape">⠀</div>
      </header>

      <Whatsappfixed />
      <main>
        <h2>Praticidade, qualidade e preço só a moto play tem</h2>
        <Scooters />
        <WhatsappButton >Fale com nossa equipe</WhatsappButton>
        <Parallax />
        <Init />
        <Benefits />
        <WhoWeAre />
      </main>

      <footer>
        <div>
          <Image
            src={Prancheta}
            layout="responsive"
            style={{
              width: "5vw"
            }}
          />
        </div>
        <a href="https://api.whatsapp.com/send?phone=5521964043012">
          <Image
            src={Whatsapp}
            layout="responsive"
          />
        </a>
      </footer>
    </>
  )
}
