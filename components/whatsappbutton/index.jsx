export default function WhatsappButton(props) {
    return (
        <a {...props} href="https://api.whatsapp.com/send?phone=5521964043012">
            <button>{props.children}</button>
        </a>
    )
}