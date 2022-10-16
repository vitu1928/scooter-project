import Image from "next/image"

import { WhoWeAreS } from "./style.module.scss"

import BeepBeep from "../../public/images/BeepBeep.png"

export default function WhoWeAre() {
    return (
        <div className={WhoWeAreS}>
          <div>
          <h2>Quem somos</h2>
          <p>A MotoPlay foi fundada há 4 anos, e hoje sua sede se localiza na Avenida das Américas 17.900, Recreio dos Bandeirantes - RJ, nasceu com o intuito de trazer para o Rio de Janeiro praticidade, mobilidade, economia e sustentabilidade através de Scooters Elétricas, com o sucesso nas vendas aqui no Rio e a pedido dos clientes passamos a fornecer nossos produtos para fora do Rio também, hoje atendemos para todos os Estados do Brasil e além das Scooters Elétricas trabalhamos também com Patinetes Elétricos, Bike elétricas, hoverboard e Quadriciclos. A MotoPlay tem uma equipe especializada e pronta para qualquer manutenção, venda de peças e suporte.</p>
          </div>
          {/* <div>
            <Image
              src={BeepBeep}
              width={1000}
              height={1000}
            />
          </div> */}
        </div>
    )
}