import Image from 'next/image'

export default function BoxInf(props) {
    return (
        <div>
            <Image 
                {...props.img}
            />
            <p>{props.children}</p>
        </div>
    )
}