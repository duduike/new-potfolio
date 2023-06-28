import { EnvelopeIcon } from "@heroicons/react/24/outline";
import "./button.scss"

interface ButtonTextProps {
    text: string;
}

export const Button = ({text} : ButtonTextProps) => {
  return (
    <button className="button">
        {text}
            
        < EnvelopeIcon className="icon" width={24}/>
    </button>
  )
}
