import Status from "./Status";

export default function StatusCard({ onClose, onUpdate, currentStatus }) {
    const statuses = ["pending", "done", "canceled"];

    return (
        <div className="flex flex-col gap-1 absolute top-0 left-0 bg-base-900 border border-base-800 rounded-xl p-2 w-36 z-[1000] shadow-xl shadow-base-950/40">
            <button
                onClick={onClose}
                className="text-base-400 hover:text-base-100 transition-colors self-end text-sm px-1 cursor-pointer"
            >
                ✕
            </button>
            {statuses.map((status) => (
                <div
                    key={status}
                    onClick={() => onUpdate(status)}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-all duration-200 ${
                        currentStatus === status
                            ? "bg-base-800 ring-1 ring-primary-500/40"
                            : "hover:bg-base-800/60"
                    }`}
                >
                    <Status status={status} />
                </div>
            ))}
        </div>
    );
}
