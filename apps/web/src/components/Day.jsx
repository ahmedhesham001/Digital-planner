export default function Day({day, date, isSelected}) {
    return (
        <div className={`flex flex-col items-center justify-center w-13 h-14 rounded-full border-2 border-base-800 transition-colors cursor-pointer ${isSelected ? "bg-primary-500 text-base-950" : "hover:bg-base-800 text-primary-500 border border-base-800"}`}>
            <div className="text-sm">{date}</div>
            <div className="text-sm">{day}</div>
        </div>
    )
}