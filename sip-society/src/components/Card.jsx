import React from 'react'
import ButtonXs from './ButtonXs'
import { Link } from 'react-router'

export default function Card({link, title, body, btn}) {
  return (
    <div className="card w-80 shadow-sm bg-white outline ">
        <figure className='h-[180px] object-contain'>
            <img
            src={`${link}`}/>
        </figure>
        <div className="card-body rounded-b-md bg-white text-dark">
            <h2 className="card-title text-2xl font-semibold">{title}</h2>
            <p className=''>{body}</p>
            <div className="card-actions justify-end mt-3">
              {/* <ButtonXs message={btn}/> */}
              <Link className='text-gray-500'>View more</Link>
            </div>
        </div>
    </div>
  )
}
