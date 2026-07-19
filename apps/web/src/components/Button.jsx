import React from 'react'

export default function Button({ name, varient }) {
    return (
    <button className={varient}>{name}</button>
    )
}

