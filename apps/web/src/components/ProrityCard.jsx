import Priority from "./Priority";

export default function ProrityCard({ onClose, onUpdate, currentPriority }) {
    const priorities = ["high", "medium", "low"];

    return (
        <div className="flex flex-col gap-1 absolute top-0 right-0 bg-base-900 border border-base-800 rounded-xl p-2 w-36 z-[1000] shadow-xl shadow-base-950/40">
            <button
                onClick={onClose}
                className="text-base-400 hover:text-base-100 transition-colors self-end text-sm px-1 cursor-pointer"
            >
                ✕
            </button>
            {priorities.map((priority) => (
                <div
                    key={priority}
                    onClick={() => onUpdate(priority)}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-all duration-200 ${
                        currentPriority === priority
                            ? "bg-base-800 ring-1 ring-primary-500/40"
                            : "hover:bg-base-800/60"
                    }`}
                >
                    <Priority priority={priority} />
                </div>
            ))}
        </div>
    );
}