import React from 'react'

export default function Card({ title, icon, number }) {
    return (
    <div className="card">
        <div className="content">
    <div className="icon">{icon}</div>
        <h2>{title}</h2>
        </div>
        <p>{number}</p>
    </div>
    )
}
