export default function WhatsappButton(props) {
    return (
        <a href="https://api.whatsapp.com/send?phone=#">
            <button>{props.children}</button>
        </a>
    )
}