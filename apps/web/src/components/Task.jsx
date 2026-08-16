import Status from "./Status";
import Priority from "./Priority";
import { useState } from "react";

export default function Task({task}){
    const [isStatusOpen, setIsStatusOpen] = useState(false);
    const [isPriorityOpen, setIsPriorityOpen] = useState(false);
    
    return (
        <div className='grid grid-cols-12 gap-4 border-b border-base-800/60 py-2 w-full px-6 items-center text-base-100'> 
            <div className='col-span-1'><input type="checkbox" {...task.status === "done" && {checked: true}} />  </div>
            <div className='col-span-3 truncate'>{task.name}</div>
            <div className='col-span-2'>{task.startDate}</div>
            <div className='col-span-2'>{task.endDate}</div>
            <div className='col-span-2 cursor-pointer relative'>
                <div onClick={() => setIsStatusOpen(!isStatusOpen)} className="cursor-pointer inline-block">
                    <Status status={task.status} />
                </div>
                {isStatusOpen && (
                    <div className="absolute left-0 bottom-full mt-1 flex flex-col gap-1 bg-base-900 border border-base-800 p-2 rounded-xl z-20 shadow-lg">
                        <div onClick={() => setIsStatusOpen(false)} className="cursor-pointer">
                            <Status status="done" />
                        </div>
                        <div onClick={() => setIsStatusOpen(false)} className="cursor-pointer">
                            <Status status="pending" />
                        </div>
                        <div onClick={() => setIsStatusOpen(false)} className="cursor-pointer">
                            <Status status="canceled" />
                        </div>
                    </div>
                )}
            </div>
            <div className='col-span-2 cursor-pointer relative'>
                <div onClick={() => setIsPriorityOpen(!isPriorityOpen)} className="cursor-pointer inline-block">
                    <Priority priority={task.priority} />
                </div>
                {isPriorityOpen && (
                    <div className="absolute left-0 top-full mt-1 flex flex-col gap-1 bg-base-900 border border-base-800 p-2 rounded-xl z-20 shadow-lg">
                        <div onClick={() => setIsPriorityOpen(false)} className="cursor-pointer">
                            <Priority priority="high" />
                        </div>
                        <div onClick={() => setIsPriorityOpen(false)} className="cursor-pointer">
                            <Priority priority="medium" />
                        </div>
                        <div onClick={() => setIsPriorityOpen(false)} className="cursor-pointer">
                            <Priority priority="low" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}