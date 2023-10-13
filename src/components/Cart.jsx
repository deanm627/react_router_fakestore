import { useContext } from 'react'
import { CartContext } from '../context/cart'
import styled from 'styled-components';

const Wrapper = styled.div`
    background: white;
    position: absolute;
    right: 0;
    display: flex;
    flex-wrap: wrap;
    width: 30%;
    color: black;

    h3 {
        width: 100%;
        text-align: center;
    }

    .itemCard {
        width: 60%;
        border-bottom: 1px solid black;
        margin: 10px auto;
    }

    img {
        height: 75px;
        width: 75px;
    }

    ul {
        width: 100%;
        list-style-type: none;
    }

    .largeButton {
        padding: 10px;
        margin: 5px;
    }

    .smallButton {
        background: white;
        color: black;
        border: 1px solid gray;
        border-radius: 3%;
        margin: 7px;
    }

    .closeButton {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
    }

`

export default function Cart({showModal, toggle}) {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

    return (
        showModal && (
            <Wrapper>
                <div className="closeButton">
                    <button className="largeButton" onClick={toggle}>Close</button>
                </div>
                <h3>Cart ({cartItems.length})</h3>
                <ul>
                    {cartItems.map((item) => (
                        <div className="itemCard" key={item.id}>
                            <li>{item.title}</li>
                            <img src={item.image} />
                            <div>
                                <button className="smallButton" onClick={() => removeFromCart(item)}>-</button>
                                {item.quantity}
                                <button className="smallButton" onClick={() => addToCart(item)}>+</button>
                            </div>
                        </div>
                    ))}
                </ul>
                <div className="lowerButtons">
                    <button className="largeButton" onClick={clearCart}>Clear</button>
                </div>
            </Wrapper>
        )
    )
  }