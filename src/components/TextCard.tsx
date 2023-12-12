import { Card, CardBody } from "@nextui-org/react"


const TextCard = ({caption}: {caption: string}) => {


  return (
    <div className="max-w-[1400px] p-4">
        <Card className="max-w-[1200px] bg-slate-800 p-4">
            <CardBody>
                <p className="text-white first-letter:capitalize">{caption}</p>
            </CardBody>
        </Card> 
    </div>
  )
}

export default TextCard