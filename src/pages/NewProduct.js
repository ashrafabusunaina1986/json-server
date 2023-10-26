import React, { useEffect, useRef } from 'react'

function NewProduct(props) {
    const nameRef = useRef()

    const postHandler = e => {
        e.preventDefault()
        fetch(`http://localhost:4000/products`,
            {
                method: 'post',
                body: JSON.stringify({ name: nameRef.current.value }),
                headers: {
                    'Content-Type': 'Application/json'
                }
            })
            .then(res => {
                fetch(`http://localhost:4000/products`)
                    .then(res => res.json())
                    .then(data => props.setData(data))
            })
    }
    useEffect(() => {
        fetch(`http://localhost:4000/products`)
            .then(res => res.json())
            .then(data => console.log(data))
    })
    return (
        <form onSubmit={postHandler}>
            <input ref={nameRef} type="text" placeholder='name' />
            <button>send</button>
        </form>
    )
}

export default NewProduct