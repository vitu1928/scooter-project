import Image from "next/image"

// Benefits
import CertificadoDeGarantia from "../../public/images/boxinf/certificado-de-garantia.png"
import PagamentoComCartao from "../../public/images/boxinf/pagamento-com-cartao-de-credito.png"
import Brasil from "../../public/images/benefits/brasil.png"
import EntregaExpressa from "../../public/images/benefits/entrega-expressa.png"
import FromaDePagamento from "../../public/images/benefits/forma-de-pagamento.png"
import ScooterEletrica from "../../public/images/benefits/scooter-eletrica.png"

import chopeper from "../../public/images/chopeper.jpeg"

import { WhoWeAre } from "../../styles/benefits.module.scss"

export default function Benefits(props) {
    return (
        <section {...props}>
            <h2> Aqui na Scooter Elétrica BC Você encontra as seguintes vantagens</h2>
            <div>
                {
                    [
                        {
                            title: "Garantia de 6 meses em todos produtos",
                            description: "Todos nossos produtos possuem 6 meses de garantia!",
                            img: CertificadoDeGarantia
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
                        },
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
                    ].map(({ img, description, title }, i) =>
                        <div key={i}>
                            <Image
                                src={img}
                                width={50}
                                height={50}
                            />
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    )
                }
            <div className={WhoWeAre}>
                <h2>Quem somos</h2>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi exercitationem, officiis voluptatibus architecto ab repellendus quaerat temporibus iure id dolore accusantium, ipsam at. Dolor tempore voluptatem deleniti laudantium, odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, numquam neque in alias fugiat enim. Expedita eveniet itaque culpa deleniti veritatis, quod temporibus quo quasi soluta cupiditate vitae voluptates amet!</span>
            </div>
            <div>
                <Image
                    src={chopeper}
                    width={245}
                    height={368}
                />
            </div>
            </div>
        </section>
    )
}
