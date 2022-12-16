import React from 'react'
import Payorder from '../../components/Home/checkout/Payorder'
import { navDataRequest } from '../../redux/home';
import { wrapper } from '../../store';

function index() {
  return (
    <div>
        <Payorder/>
    </div>
  )
}

export default index;


export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(navDataRequest());
});