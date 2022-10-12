import WhatsappButton from "../whatsappbutton"
import { WhatsappButton as WhatsappButtonS } from '../../styles/whatsappbutton.module.scss'

export default function Parallax(props) {
    return(
        <section {...props}>
            <div>
                <h2>SOLICITE AGORA SEU ORÇAMENTO EM POUCOS SEGUNDOS PELO WHATSAPP!</h2>
                <p>Clique no botão e fale conosco!</p>
                <WhatsappButton className={WhatsappButtonS}>QUERO SOLICITAR UM ORÇAMENTO</WhatsappButton>
            </div>
        </section>
    )
}