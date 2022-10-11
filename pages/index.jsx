import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Whatsapp from "../public/images/whatsapp.png"
// Scooters
import ScooterI from "../public/images/scooters/scooter1.png"
import Scooter1 from "../public/images/scooters/01.png"
import Scooter2 from "../public/images/scooters/02.png"
import Scooter3 from "../public/images/scooters/03.png"
import Scooter4 from "../public/images/scooters/04.png"
import Scooter5 from "../public/images/scooters/05.png"
import Scooter6 from "../public/images/scooters/06.png"

// Cards
import MasterCard from "../public/images/cards/card1.jpg"
import Visa from "../public/images/cards/card2.jpg"
import Hipercard from "../public/images/cards/card3.png"
import Elo from "../public/images/cards/card4.png"
import AmericanExpress from "../public/images/cards/card5.jpg"
import DinnerClub from "../public/images/cards/card6.png"
import MercadoPago from "../public/images/cards/mercado_pago.png"

// BoxInf
import CertificadoDeGarantia from "../public/images/boxinf/certificado-de-garantia.png"
import PagamentoComCartao from "../public/images/boxinf/pagamento-com-cartao-de-credito.png"
import ScooterDeChute from "../public/images/boxinf/scooter-de-chute.png"
import ServicoEletrico from "../public/images/boxinf/servico-eletrico.png"

// Benefits
import Brasil from "../public/images/benefits/brasil.png"
import EntregaExpressa from "../public/images/benefits/entrega-expressa.png"
import FromaDePagamento from "../public/images/benefits/forma-de-pagamento.png"

import Benefits from '../components/benefits'
import BoxInf from '../components/boxinf'
import WhatsappButton from '../components/whatsappbutton'

export default function Home() {
  return (
    <>
      <Head>
        <title>Scooter Elétrica BC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        // Logo
      </header>
      <div id="whatsappfixed">
        <Image
          src={Whatsapp}
          width={42}
          height={32}
        />
      </div>
      <main>
        <section id="init">
          <div id="separation">
            <h1>
              Scooters Elétricas<br /><span>Experimente o novo</span>
            </h1>
            <div id="options">
              <p>✔️Parcelamento em até 18x Cartão de Crédito;</p>
              <p>✔️Diversas cores disponíveis;</p>
              <p>✔️Carregamento rápido;</p>
              <p>✔️Facilidade na hora de ir e vir.</p>
              <p>✔️Garantia</p>
              <p>Os melhores preços você encontra na Scooter Elétrica</p>
            </div>
            <WhatsappButton>
              Fale com nossa equipe agora
            </WhatsappButton>
          </div>
          <Image 
            src={ScooterI} 
          />
        </section>
        <section>
          <p>Entregamos para Todo Brasil com Condições Especiais de Pagamento!</p>
            <div id="cards">
              {
                [MasterCard, Visa, Hipercard, Elo, AmericanExpress, DinnerClub, MercadoPago].map(
                  (img, i) => 
                    <Image 
                      src={img}
                      key={i}
                      objectFit="fill"
                      width={50}
                      height={35}
                    />
                )
              }
            </div>
        </section>
        <section id="boxinf">
          <BoxInf
            img={
              {
                src: ServicoEletrico,
                width: 50,
                height: 50
              }
            }
          >100% Elétrica</BoxInf>
          <BoxInf
            img={
              {
                src: CertificadoDeGarantia,
                width: 50,
                height: 50
              }
            }
          >Garantia de 6 meses</BoxInf>
          <BoxInf
            img={
              {
                src: PagamentoComCartao,
                width: 50,
                height: 50
              }
            }
          >Em até 18x no cartão</BoxInf>
          <BoxInf
            img={
              {
                src: ScooterDeChute,
                width: 50,
                height: 50
              }
            }
          >Pronta entrega</BoxInf>
        </section>
        <section id="scooters">
          <h2>Diversos modelos para você</h2>
          <div id="scooters">
            {[Scooter1,Scooter2,Scooter3,Scooter4,Scooter5,Scooter6].map(
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
        <section id="parallax">
          <h2>SOLICITE AGORA SEU ORÇAMENTO EM POUCOS SEGUNDOS PELO WHATSAPP!</h2>
          <p>Clique no botão e fale conosco!</p>
          <WhatsappButton>QUERO SOLICITAR UM ORÇAMENTO</WhatsappButton>
        </section>
        <section id="benefits">
          <h2>Aqui na Scooter Elétrica BC Você encontra as seguintes vantagens</h2>
          <Benefits
            title="Garantia de 6 meses em todos produtos"
            description="Todos nossos produtos possuem 6 meses de garantia!"
            img={
              <Image 
                src={CertificadoDeGarantia}
                width={50}
                height={50}
              /> 
            }
          />
          <Benefits
            title="Entrega Garantida"
            description="Centenas de scooters entregues todos os meses através de nosso site ou loja."
            img={
              <Image 
                src={EntregaExpressa}
                width={50}
                height={50}
              /> 
            }
          />
          <Benefits
            title="Facilidade no pagamento"
            description="Pagamento pode ser feito por cartões, PIX ou transferências. Tudo com segurança."
            img={
              <Image 
                src={FromaDePagamento}
                width={50}
                height={50}
              /> 
            }
          />
          <Benefits
            title="Frete Rápido para todo Brasil"
            description="Consulte-nos sobre prazos e valores para sua região."
            img={
              <Image 
                src={Brasil}
                width={50}
                height={50}
              /> 
            }
          />
          <Benefits
            title="Parcelamos em até 18x no cartão"
            description="Podendo ser em um cartão ou mais."
            img={
              <Image 
                src={PagamentoComCartao}
                width={50}
                height={50}
              /> 
            }
          />
          <Benefits
            title="Scooter a pronta entrega"
            description="Escolha a sua e sai andando."
            img={
              <Image 
                src={CertificadoDeGarantia}
                width={50}
                height={50}
              /> 
            }
          />
        </section>
        <section id="whoweare">
          <div>
            <h2>Quem somos</h2>
            <p></p>
          </div>
          {/* <Image /> */}
        </section>
      </main>

      <footer>
        {/* <Image /> // Logo */}
        <WhatsappButton>
          {/* <Image /> // whatsapp */}
        </WhatsappButton>
        
      </footer>
    </>
  )
}
