import {useState} from "react";
import Status from "./Status";
import Priority from "./Priority";

export default function Task({task}){
    const [isDone, setIsDone] = useState(task.status === "done");
    const handleCheck = () => { setIsDone(!isDone); };
    return (
        <div
            className={`grid grid-cols-12 gap-4 border-b border-base-800/60 py-2 w-full px-6 items-center text-base-100 ${
                isDone ? "opacity-50" : ""
            }`}
        >
            <div className="col-span-1">
                <input
                    type="checkbox"
                    checked={isDone}
                    onChange={handleCheck}
                    className="accent-primary-500"
                />
            </div>
            <div className="col-span-3 truncate">
                {task.name}
            </div>
            <div className="col-span-2">
                {task.startDate}
            </div>
            <div className="col-span-2">
                {task.endDate}
            </div>
            <div className="col-span-2">
                <Status status={isDone ? "done" : task.status} />
            </div>
            <div className="col-span-2">
                <Priority priority={task.priority} />
            </div>
        </div>
    );
}