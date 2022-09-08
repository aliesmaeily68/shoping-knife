import React, { useContext } from 'react'
import {AllProductContext} from '../../Contexts/ProductContext'

import './Toasts.css'

export default function Toasts() {
   const DataContext = useContext(AllProductContext)
    return (
        <div className={DataContext.showToasts ? ' MainToasts toast align-items-center show' : 'MainToasts toast align-items-center'} role="alert"  >{/**insert className shwo to shwoing Toasts */}
            <div className="toast-body">
                {DataContext.toastTitle}
            </div>
        </div>
    )
}
