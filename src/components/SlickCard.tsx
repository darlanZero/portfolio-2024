import { Card, CardHeader, Image, Link } from '@nextui-org/react'

const SlickCard = ({imageSrc, imageAlt, title, content, externalLink, externalLinkName }: {title: string, content: string, imageSrc: string, imageAlt: string, externalLink: string, externalLinkName: string}) => {
  
    return (
        <div className='max-w-[900px] p-4' >
                <Card 
                    className='h-[300px] hover:cursor-pointer' 
                    isHoverable
                >
                    <CardHeader className='absolute backdrop-blur-sm z-10 top-1 flex-col !items-start'>
                        <p className='text-tiny text-blue-600/60 uppercase font-bold'>{content}</p>
                        <h2 className='text-green-500 font-bold sm:text-slate-900  sm:font-medium text-large'>{title}</h2>
                        <Link href={externalLink} color='success' isExternal isBlock>{externalLinkName}</Link>
                    </CardHeader>
                    <Image 
                        removeWrapper
                        src={imageSrc}
                        alt={imageAlt}
                        className='z-0 w-full h-full object-cover md:object-fill'
                    />
                </Card>
        </div>
    )
}

export default SlickCard