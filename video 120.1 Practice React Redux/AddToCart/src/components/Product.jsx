// components/Product.js
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../redux/CartSlice'

function Product({ product }) {
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        }))
    }

    return (
        <div className="product">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product