import { useState, useEffect } from 'react'
import { Bell, ClipboardList, ClipboardCheck, AlarmClockMinus, AlarmClockCheck, ListSortDescending} from 'lucide-react'
import Day from '../components/Day'
import Card from '../components/Card'
import SideBar from '../components/SideBar'
import Task from '../components/Task'
export default function Dashboard() {
    const tasks = [
        {name: "Task1", startDate: "2026-07-22", endDate: "2026-07-22", status: "pending", priority: "high"},
        {name: "Task2", startDate: "2026-07-22", endDate: "2026-07-22", status: "done", priority: "medium"},
        {name: "Task3", startDate: "2026-07-22", endDate: "2026-07-22", status: "canceled", priority: "low"},
        {name: "Task4", startDate: "2026-07-22", endDate: "2026-07-22", status: "done", priority: "high"},
    ]
    const [isDark, setIsDark] = useState(true);
    useEffect(() =>{
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setIsDark(currentTheme === 'dark');
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    setIsDark(mutation.target.getAttribute('data-theme') === 'dark');
                }
            });
        });
        observer.observe(document.documentElement, {
            attributes: true
        });
        return () => observer.disconnect();
    }, [])
    return (
        <div className="min-h-screen w-full flex transition-all duration-500 bg-base-950">
            <SideBar isDark={isDark} />
            <main className="w-full h-screen overflow-hidden flex flex-col gap-6 text-base-400">
                <nav className="w-full flex flex-row justify-between items-center py-2 px-12 border-b border-base-800 shrink-0">
                    <div className="text-xl">Good Morning, <span className="font-bold text-base-100">Ahmed</span></div>
                    <div className="flex flex-row items-center gap-2">
                        <input type="search" name="search" id="search" placeholder="Search for tasks..."
                            className="text-base-100 bg-base-900 border border-base-800 
                            rounded-lg px-4 py-0.5 focus:outline-none focus:border-primary-500 focus:border-2 text-sm" 
                            />
                        <Bell className="text-base-400 hover:text-base-100 transition-colors cursor-pointer" />
                        <div className="w-10 h-10 rounded-full bg-base-900 flex items-center justify-center text-primary-500 font-bold">A</div>
                    </div>
                </nav>
                <div className='flex flex-row gap-4 px-12 h-12 items-center justify-center shrink-0'>
                    <Day day="Sat" date="12" isSelected={false} />
                    <Day day="Sun" date="13" isSelected={false} />
                    <Day day="Mon" date="14" isSelected={false} />
                    <Day day="Tue" date="15" isSelected={false} />
                    <Day day="Wed" date="16" isSelected={false} />
                    <Day day="Thu" date="17" isSelected={false} />
                    <Day day="Fri" date="18" isSelected={false} />
                    <Day day="Sat" date="19" isSelected={true} />
                    <Day day="Sun" date="20" isSelected={false} />
                    <Day day="Mon" date="21" isSelected={false} />
                    <Day day="Tue" date="22" isSelected={false} />
                    <Day day="Wed" date="23" isSelected={false} />
                    <Day day="Thu" date="24" isSelected={false} />
                    <Day day="Fri" date="25" isSelected={false} />
                </div>
                <div className="flex flex-row justify-between px-12 shrink-0">
                    <Card title="Total Tasks" number="5" icon={<ClipboardList className="w-8 h-8 text-base-100" />} />
                    <Card title="Completed Tasks" number="3" icon={<ClipboardCheck className="w-8 h-8 text-base-100" />} />
                    <Card title="Pending Tasks" number="2" icon={<AlarmClockMinus className="w-8 h-8 text-base-100" />} />
                    <Card title="Overdue Tasks" number="1" icon={<AlarmClockCheck className="w-8 h-8 text-base-100" />} />
                </div>

                <div className='px-12 border border-base-800 rounded-2xl mx-12 py-4 flex flex-col flex-1 overflow-hidden mb-6'>
                    <div className="flex flex-row justify-between px-4 items-center shrink-0">
                        <h2 className='text-base-100 font-bold text-xl'>Tasks List</h2>
                        <div className='flex flex-row gap-2 items-center'>
                            <button className="text-base-100 bg-primary-500 rounded-full px-4 py-2 cursor-pointer hover:bg-base-100 hover:text-primary-500 transition-colors">+</button>
                            <div className="filter flex flex-row gap-2 items-center bg-base-900 rounded-full px-4 py-2 cursor-pointer hover:bg-base-800 transition-colors">
                                <ListSortDescending className="w-4 h-4 text-primary-500" />
                                <p className='text-base-100 text-sm'>Filter</p>
                            </div>
                        </div>
                    </div>
                    <div className='border border-base-800 rounded-2xl overflow-x-hidden overflow-y-auto flex-1 mt-2 flex flex-col'>
                        <div className='grid grid-cols-12 px-6 py-3 border-b border-base-800 bg-base-900 font-bold text-base-100 gap-4 sticky top-0 z-10 shrink-0'>
                            <div className='col-span-1'><input type="checkbox" disabled /></div>
                            <div className='col-span-3'>Task name</div>
                            <div className='col-span-2'>Start Date</div>
                            <div className='col-span-2'>End Date</div>
                            <div className='col-span-2'>Status</div>
                            <div className='col-span-2'>Priority</div>
                        </div>
                        <div className='flex flex-col py-2 gap-4'>
                            {tasks.map((task, index) => (
                                <Task key={index} task={task} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}