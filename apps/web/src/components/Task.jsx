import { useState } from "react";
import Status from "./Status";
import Priority from "./Priority";
import ProrityCard from "./ProrityCard";
import StatusCard from "./StatusCard";

export default function Task({ task, onUpdate }) {
    const isDone = task.status === "done";

    // Priority dropdown
    const [isPriorityModalOpen, setIsPriorityModalOpen] = useState(false);
    const handlePriorityChange = (newPriority) => {
        setIsPriorityModalOpen(false);
        onUpdate(task.id, "priority", newPriority);
    };

    // Status dropdown
    const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
    const handleStatusChange = (newStatus) => {
        setIsStatusModalOpen(false);
        onUpdate(task.id, "status", newStatus);
    };

    // Checkbox toggles between done <-> pending
    const handleCheckboxToggle = () => {
        const newStatus = task.status === "done" ? "pending" : "done";
        onUpdate(task.id, "status", newStatus);
    };

    return (
        <div
            className={`grid grid-cols-12 gap-4 border-b border-base-800/60 py-2 w-full px-6 items-center text-base-100 ${
                isDone ? "text-base-400" : ""
            }`}
        >
            <div className="col-span-1">
                <input
                    type="checkbox"
                    checked={isDone}
                    onChange={handleCheckboxToggle}
                    className="accent-primary-500"
                />
            </div>
            <div className="col-span-3 truncate">{task.name}</div>
            <div className="col-span-2">{task.startDate}</div>
            <div className="col-span-2">{task.endDate}</div>

            {/* Status — clickable to open StatusCard */}
            <div className="col-span-2 cursor-pointer relative">
                <div onClick={() => setIsStatusModalOpen(true)}>
                    <Status status={task.status} />
                </div>
                {isStatusModalOpen && (
                    <StatusCard
                        onClose={() => setIsStatusModalOpen(false)}
                        onUpdate={handleStatusChange}
                        currentStatus={task.status}
                    />
                )}
            </div>

            {/* Priority — clickable to open ProrityCard */}
            <div className="col-span-2 cursor-pointer relative">
                <div onClick={() => setIsPriorityModalOpen(true)}>
                    <Priority priority={task.priority} />
                </div>
                {isPriorityModalOpen && (
                    <ProrityCard
                        onClose={() => setIsPriorityModalOpen(false)}
                        onUpdate={handlePriorityChange}
                        currentPriority={task.priority}
                    />
                )}
            </div>
        </div>
    );
}