import { useSelector } from "react-redux"
import {CartItemsList, SectionTitle} from "../components"
import CartTotals from "../components/CartTotals"
import { Link } from "react-router-dom"

const Cart = () => {

  const user = null
  const numItemsInCart = useSelector((state) => state.cartState.numItemCart)

  if (numItemsInCart == 0) {
    return <SectionTitle text='your cart is empty'/>
  }

  return (
    <>
    <SectionTitle text='Shopping Cart'/>
      <div className="mt-8 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <CartItemsList/>
        </div>

        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals/>
          {user? (
            <Link to='/checkout' className="btn btn-primary btn-block mt-8">
            proceed to checkout
          </Link>) : (
            <Link to='/login' className="btn btn-primary btn-block mt-8">
              Login to checkout
            </Link>
          )
          }
        </div>
      </div>
    </>
  )
}

export default Cart
