import React from 'react'
import './second_header.css'
import Topnav from '../top nav/top-nav'
import Cart from '../cart/cart'
import { useState } from 'react';
import Card from '../card/card'

const SecondHeader = () => {
  return (
    <div className='sec-header'>
        <div className='clothpart'>
          <Topnav/>
          <div class="clothlist">
            <Card/>
          </div>
        </div>
    </div>
  )
}

export default SecondHeader;