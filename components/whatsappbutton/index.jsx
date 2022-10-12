export default function WhatsappButton(props) {
    return (
        <a {...props} href="https://api.whatsapp.com/send?phone=#">
            <button>{props.children}</button>
        </a>
    )
}