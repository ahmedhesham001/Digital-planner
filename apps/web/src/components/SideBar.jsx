import { Bolt, LogOut, Flame, Plus } from 'lucide-react'
import ThemeSwitch from './ThemeSwitch'
import LightLogo from '../assets/Light-Logo.svg'
import DarkLogo from '../assets/Dark-Logo.svg'
import { useNavigate } from 'react-router-dom';
export default function SideBar({isDark}) {
    const navigate = useNavigate();
    return(
        <aside className="w-64 border-r border-base-800 flex flex-col justify-between items-start py-4 shrink-0 select-none">
            <div className='flex flex-col gap-8 w-full'>
                <div className="flex items-center px-6">
                        <img src={isDark ? LightLogo : DarkLogo} alt="Light Logo" className="w-25" />
                    </div>
                    <nav className="flex flex-col text-lg">
                        <div className="text-primary-500 border-primary-500 border-r-3 px-4 py-2 cursor-pointer ">Task Manager</div>
                        <div className="text-base-400 hover:text-base-100 transition-colors cursor-pointer border-base-700 border-y-2 px-4 py-2">Habit Tracker</div>
                        <div className="text-base-400 hover:text-base-100 transition-colors cursor-pointer border-base-700 border-b-2 px-4 py-2">Digital Planner</div>
                    </nav>
            </div>
            <div className="w-full flex flex-col gap-4 px-4">
                <button className="w-full bg-primary-500 hover:bg-base-100 hover:text-primary-500 font-bold py-2 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer text-sm shadow-md shadow-primary-500/10">
                    <Plus className="w-4 h-4" /> New Task
                </button>
                <div className="px-4 py-2.5 rounded-xl bg-base-900 border border-base-800 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-base-300 font-medium">
                        <Flame className="w-4 h-4 text-primary-500" />
                        <span>Daily Streak</span>
                    </div>
                    <span className="text-xs font-bold text-primary-500 bg-primary-500/10 px-2 py-0.5 rounded-md">3 Days 🔥</span>
                </div>
                <div className="p-3 rounded-xl bg-base-900 border border-base-800 flex flex-col gap-2">
                    <div className="flex justify-between text-xs text-base-400">
                        <span>Today's Progress</span>
                        <span className="text-primary-500 font-bold">60%</span>
                    </div>
                    <div className="w-full bg-base-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-primary-500 h-full w-[60%] rounded-full"></div>
                    </div>
                </div>
            </div>        
                <div className='flex flex-col w-full gap-2 pt-4 border-t border-base-800/60 justify-end'>
                    <div className='text-base-400 hover:text-base-100 transition-colors cursor-pointer border-base-700 border-b-2 px-4 py-2 flex items-center gap-2'>
                        <Bolt className='w-4 h-4' /> Edit Profile
                    </div>
                    <div className='text-base-400 hover:text-base-100 transition-colors cursor-pointer border-base-700 border-b-2 px-4 py-2 flex items-center gap-2' onClick={() => navigate('/')}>
                        <LogOut className='w-4 h-4' /> Logout
                    </div>
                    <div className="theme flex items-center justify-center">
                        <div className="theme-toggle flex ">
                            <ThemeSwitch />
                        </div>
                    </div>
                </div>
            </aside>
    )}