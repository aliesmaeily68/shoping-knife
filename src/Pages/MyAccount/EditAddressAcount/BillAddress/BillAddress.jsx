import React from 'react'
import BillOrTransportationForm from '../../../../Components/BillOrTransportationForm/BillOrTransportationForm'

import './BillAddress.css'


export default function BillAddress() {
  return (
    <div className='Container-BillAddress'>
        <div className="Wrapper-BillAddress">
            <h2>آدرس صورتحساب</h2>
            <BillOrTransportationForm />
        </div>
    </div>
  )
}
