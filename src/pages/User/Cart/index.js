import { Button } from '@mui/material';
import React from 'react'
import Page from '../../../components/Page/Page';
const Cart = () => {
  return (
    <Page>
      <section className='cart'>
        <header>
          <h1>Cart</h1>
        </header>
        <div className='cart__container'>
          <div className='cart__container__status'>
            <p>Your cart is currently empty.</p>
          </div>
          <Button>Return to shop</Button>
        </div>
      </section>
    </Page>
  )
}

export default Cart