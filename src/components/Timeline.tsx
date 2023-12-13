

const Timeline = ({data, title, caption}: {data: string, title: string, caption: string}) => {
  return (
    <div className='flex flex-1 items-center justify-center'>
        <ol className='relative border-sborder-gray-700'>
            <li className='mb-10 ms-4'>
                <div className='absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700'></div>
                <time className='mb-1 text-sm font-normal leading-none text-gray-500 '>{data}</time>
                <h3 className='text-lg font-semibold text-white '>{title}</h3>
                <p className='mb-4 text-base font-normal text-gray-500 '>{caption}</p>
            </li>
        </ol>
    </div>
  )
}

export default Timeline