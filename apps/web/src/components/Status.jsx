export default function Status({ status }) {
    return (
        <div className={`status ${status} rounded-2xl px-2 py-1 text-center inline-flex items-center justify-center `}>
            {status.charAt(0).toUpperCase()+ status.slice(1)}
        </div>
    )
}