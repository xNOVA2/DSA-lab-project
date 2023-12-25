import React from 'react'
import {  Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench, Music, Home } from 'lucide-react'

export default function Header() {
  return (
    <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-purple-800 px-5 py-8">
      <a href="#">
        <h1 className='flex justify-start gap-2 text-white text-3xl items-center italic  text-muted-foreground '>SonicHub <Music size={30}/></h1>
      </a>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <hr />
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
              href="#"
            >
              <Home className="h-5 w-5" />
              <span className="mx-2 text-lg font-medium ">Home</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Wallet className="h-5 w-5" />
              <span className="mx-2 text-lg font-medium">Explore</span>
            </a>
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">content</label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Newspaper className="h-5 w-5" />
              <span className="mx-2 text-lg font-medium">Blogs</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <BellRing className="h-5 w-5" />
              <span className="mx-2 text-lg font-medium">Notifications</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Paperclip className="h-5 w-5" />
              <span className="mx-2 text-lg font-medium">Checklists</span>
            </a>
          </div>

          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">Customization</label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Brush className="h-5 w-5" />
              <span className="mx-2 text-lg font-medium">Themes</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Wrench className="h-5 w-5" />
              <span className="mx-2 text-lg font-medium">Setting</span>
            </a>
          </div>
        </nav>
      </div>
    </aside>
  )
}
