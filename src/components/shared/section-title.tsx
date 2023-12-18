import React from 'react'

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <h4 className='text-xl lg:text-2xl font-medium mb-3'>{title}</h4>
    )
}

export default SectionTitle