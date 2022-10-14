import Image from "next/image"

import Chave from "../../public/images/boxinf/chave.png"
import PagamentoComCartao from "../../public/images/boxinf/pagamento-com-cartao-de-credito.png"
import Brasil from "../../public/images/benefits/brasil.png"
import EntregaExpressa from "../../public/images/benefits/entrega-expressa.png"
import FromaDePagamento from "../../public/images/benefits/forma-de-pagamento.png"
import ScooterEletrica from "../../public/images/benefits/scooter-eletrica.png"

export default function Benefits(props) {
    return (
        <section {...props}>
            <h2>Aqui na MotoPlay você encontra as seguintes vantagens</h2>
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
            </div>
        </section>
    )
}
