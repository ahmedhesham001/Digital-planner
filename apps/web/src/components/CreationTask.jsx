import { X, CalendarDays } from 'lucide-react'

export default function CreationTask({ onClose }) {
    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-[520px] rounded-3xl bg-base-950 p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-base-700 pb-2">
          <h2 className="text-3xl font-bold text-base-100">Create Task</h2>
          <button onClick={onClose} className="text-2xl font-bold text-base-100 hover:text-primary-500
            cursor-pointer"><X size={28} /></button></div>
          <form className="mt-5 flex flex-col gap-5">
          <div>
            <label className="mb-2 block text-base text-base-100">Task Title</label>
            <input type="text" placeholder=" Meeting" className="w-full rounded-xl border border-base-500 bg-transparent px-3 py-3 text-base-100 placeholder:text-base-500 focus:border-primary-500 focus:outline-none"/>
            </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                <label className="mb-2 block text-base text-base-100">Start Date</label>
                  <div className="relative">
                  <input type="date" className=" w-full rounded-xl border border-base-500 bg-transparent px-3 py-3 text-base-100 focus:border-primary-500 focus:outline-none "/>
                  <CalendarDays className="absolute right-3 top-1/2 -translate-y-1/2 text-base-100 pointer-events-none"size={24}/></div></div>
                    <div>
                    <label className="mb-2 block text-base text-base-100">End Date</label>
                      <div className="relative">
                      <input type="date" className="w-full rounded-xl border border-base-500 bg-transparent px-3 py-3 text-base-100 focus:border-primary-500 focus:outline-none    "/>
                      <CalendarDays className="absolute right-3 top-1/2 -translate-y-1/2 text-base-100 pointer-events-none" size={24}/></div></div></div>
                        <div className="flex justify-center gap-3 mt-2">
                        <button type="button" className=" flex items-center gap-3 rounded-xl bg-base-900 px-7 py-3 text-lg font-bold text-base-100 hover:bg-base-800 "><span className="h-3 w-3 rounded-full bg-[#E05A38]" />High</button>
                        <button
                            type="button"
                            className=" flex items-center gap-3 rounded-xl bg-base-900 px-7 py-3 text-lg font-bold text-base-100 hover:bg-base-800">
                            <span className="h-3 w-3 rounded-full bg-[#F2C36B]" />
                            Medium
                        </button>
                        <button
                            type="button"
                            className=" flex items-center gap-3 rounded-xl bg-base-900 px-7 py-3 text-lg font-bold text-base-100 hover:bg-base-800">
                            <span className="h-3 w-3 rounded-full bg-[#A5A5B0]" />
                            Low
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <button
                            type="submit"
                            className=" rounded-xl bg-primary-500 py-2 text-xl font-bold text-base-100 hover:bg-primary-600 cursor-pointer">
                            Add Task
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className=" rounded-xl border border-primary-500 bg-transparent py-2 text-xl font-bold text-base-100 hover:bg-primary-500 cursor-pointer">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}