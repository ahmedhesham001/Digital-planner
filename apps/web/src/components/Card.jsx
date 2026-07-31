import React from 'react'

export default function Card({ title, icon, number }) {
    const backgroundIcon = React.cloneElement(icon, { className: 'w-30 h-30 text-base-100 opacity-10' })
    return (
    <div className="card w-[248px] h-[274px] bg-linear-to-b from-base-900 to-base-950 rounded-2xl border border-base-800 relative flex flex-col justify-between p-4 overflow-hidden shadow-md shadow-base-900/10 hover:shadow-xl hover:shadow-base-500/20 transition-all duration-300 cursor-pointer">
        <div className="title flex flex-row gap-2 items-center">
            {icon}
            <h2 className='text-base-100 font-bold text-xl'>{title}</h2>
        </div>
        <p className='text-base-100 font-medium text-2xl'>{number} Tasks</p>
        <p className='text-base-100 text-xl'>You have {number} {title} today.</p>
        <span className='absolute -bottom-5 -right-10 '>{backgroundIcon}</span>
    </div>
    )
}
