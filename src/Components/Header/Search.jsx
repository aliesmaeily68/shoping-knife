import React from 'react'
import {GoSearch} from 'react-icons/go'

import './Search.css'

export default function () {
  return (
    <div className='Search'>
        <input type="text"className='Search-Input' placeholder='جستجو ...' />
        <div className='Search-Icon'><GoSearch /></div>
    </div>
  )
}
