import { Divider, Image } from '@nextui-org/react'

const DividerSection = ({title, description, labels}: {title: string, description: string, labels: {label: string, iconImage: string | React.ComponentType<{className?: string}>}[]}) => {

    const Value = ({label, iconImage}: {label: string, iconImage: string | React.ComponentType<{className?: string}>}) => {
        
        const IconComponent = iconImage as React.ComponentType<{className?: string}>

        return (
            <div className='flex flex-1  items-center'>
                {typeof iconImage === 'string' ? (
                    <Image 
                        src={iconImage}
                        height={25}
                        width={25}
                        className='hover:cursor-pointer pr-1 rounded-sm'
                        alt='icon'
                    />
                ): (
                    
                    <IconComponent
                        className='hover:cursor-pointer pr-1 rounded-sm'
                    />
                )}
                <div className='border-r pr-1'>{label}</div>
            </div>
        )
    }
  return (
    <div className='max-w-[900px] p-4 gap-4'>
        <div className='space-y-1'>
            <h4 className='text-medium font-medium'>{title}</h4>
            <p className='text-small text-default-400'>{description}</p>
        </div>

        <Divider className='my-4' />
        <div className='flex h-5 place-items-end p-4 gap-1 space-x-4 text-small flex-col md:flex-row'>
            {labels.map((item, index) => <Value key={index} iconImage={item.iconImage} label={item.label} />)}
        </div>
    </div>
  )
}

export default DividerSection