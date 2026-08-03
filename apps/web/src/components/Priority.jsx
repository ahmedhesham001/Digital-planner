export default function Priority({ priority }) {
    return (
        <div className={`priority ${priority} rounded-2xl px-2 py-1 text-center inline-flex items-center justify-center text-sm text-base-100`}>
            <div className="w-3 h-3 rounded-full bg-current mr-2"></div>
            {priority.charAt(0).toUpperCase() + priority.slice(1)}
        </div>
    )
}