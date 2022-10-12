import Image from 'next/image'

import CertificadoDeGarantia from "../../public/images/boxinf/certificado-de-garantia.png"
import PagamentoComCartao from "../../public/images/boxinf/pagamento-com-cartao-de-credito.png"
import ScooterDeChute from "../../public/images/boxinf/scooter-de-chute.png"
import ServicoEletrico from "../../public/images/boxinf/servico-eletrico.png"

export default function BoxesInf(props) {
    return (
        <section {...props}>
            {
                [
                    { img: CertificadoDeGarantia, description: "Garantia de 6 meses" },
                    { img: PagamentoComCartao, description: "Em até 18x no cartão" },
                    { img: ScooterDeChute, description: "Pronta entrega" },
                    { img: ServicoEletrico, description: "100% Elétrica" }
                ].map(({ img, description }, i) => {
                    return <div key={i}>
                        <Image
                            src={img}
                            width={50}
                            height={50}
                        />
                        <p>{description}</p>
                    </div>
                })
            }
        </section>

    )
}
