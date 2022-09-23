import React from 'react'
import {BsBagX} from 'react-icons/bs'
import './DashboardEmptyRoutes.css'

export default function DashboardEmptyRoutes(props) {
   
  return (
    <div className='DashboardEmptyRoutes'>
        <BsBagX className='Icon-DashboardEmptyRoutes'/>
        <h2>{props.title}</h2>
    </div>
  )
}
