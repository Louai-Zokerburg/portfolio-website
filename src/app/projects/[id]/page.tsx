import React from 'react'

const SingleProject = ({ params }: { params: { id: string } }) => {

    console.log(params.id)

    return (
        <div>SingleProject</div>
    )
}

export default SingleProject