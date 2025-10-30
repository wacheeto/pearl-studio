import React from 'react'

export default function ButtonXs({message}) {
  return (
    <button className="mt-4 px-6 py-3 bg-zinc-950 text-white rounded-xl hover:bg-zinc-800 transition">
        {message}
    </button>
  )
}
