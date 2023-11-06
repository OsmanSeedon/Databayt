"use client"
import { useState } from 'react'

export default function Folder() {
  const [folders, setFolders] = useState<string[]>([])

  function addFolder() {
    setFolders(prevFolders => [...prevFolders, 'New Folder']) 
  }

  return (
    <div className="flex flex-col items-center">
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={addFolder}
      >
        Add Folder
      </button>

      <div className="mt-4 flex flex-col">
        {folders.map(folder => (
          <div key={folder} className="border p-4 mb-2">
            {folder} 
          </div>
        ))}
      </div>
    </div>
  )
}