import Image from "next/image"

import Chave from "../../public/images/boxinf/chave.png"
import PagamentoComCartao from "../../public/images/boxinf/pagamento-com-cartao-de-credito.png"
import Brasil from "../../public/images/benefits/brasil.png"
import EntregaExpressa from "../../public/images/benefits/entrega-expressa.png"
import FromaDePagamento from "../../public/images/benefits/forma-de-pagamento.png"
import ScooterEletrica from "../../public/images/benefits/scooter-eletrica.png"

import { BenefitImage, Benefits as BenefitsS } from "./style.module.scss"

export default function Benefits() {
    function mapear({ img, description, title }, i) {
        return <div key={i}>
            <div className={BenefitImage}>
                <Image
                    src={img}
                    width={500}
                    height={500}
                />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    }
    return (
        <section className={BenefitsS}>
            <h2>Aqui na MotoPlay você encontra as seguintes vantagens</h2>
            <div>
                <div>
                    {
                        [
                            {
                                title: "Vendemos peças e fazemos manutenção",
                                description: "Aqui na MotoPlay vendemos todas as peças de Scooters fazemos trocas e manutenções.",
                                img: Chave
                            },
                            {
                                title: "Entrega Garantida",
                                description: "Centenas de scooters entregues todos os meses através de nosso site ou loja.",
                                img: EntregaExpressa
                            },
                            {
                                title: "Facilidade no pagamento",
                                description: "Pagamento pode ser feito por cartões, PIX ou transferências. Tudo com segurança.",
                                img: FromaDePagamento
                            }
                        ].map(mapear)
                    }
                </div>
                <div>
                    {
                        [
                            {
                                title: "Frete Rápido para todo Brasil",
                                description: "Consulte-nos sobre prazos e valores para sua região.",
                                img: Brasil
                            },
                            {
                                title: "Parcelamos em até 18x no cartão",
                                description: "Podendo ser em um cartão ou mais.",
                                img: PagamentoComCartao
                            },
                            {
                                title: "Scooter a pronta entrega",
                                description: "Escolha a sua e sai andando.",
                                img: ScooterEletrica
                            }
                        ].map(mapear)
                    }
                </div>
            </div>
        </section>
    )

}