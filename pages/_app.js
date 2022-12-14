import '../styles/globals.css'
import { wrapper } from '../store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function MyApp({ Component, pageProps }) {
  
  const [isSSR, setIsSSR] = useState(true);
  const { carts, totalPrice, totalQuantity } = useSelector(
    (state) => state.product
  );

 
 

  useEffect(()=>{
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("localCart", JSON.stringify({ carts: carts , totalPrice: totalPrice, totalQuantity: totalQuantity }));
    }
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[carts,totalPrice, totalQuantity])

  useEffect(() => {
    setIsSSR(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isSSR) {
    return null;
  }

  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
