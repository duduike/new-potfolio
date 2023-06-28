import Image from 'next/image'
import "./header.scss"

export function Header() {
    return (
        <div className="header">
            <div>
                <h1>Hi, i´m Eduardo! 👋</h1>
                <h2>Front-end Developer</h2>
            </div>
            <Image
                src="/eu-3.jpg"
                alt="Vercel Logo"
                width={325}
                height={277}
                priority
            />
        </div>
    )
}