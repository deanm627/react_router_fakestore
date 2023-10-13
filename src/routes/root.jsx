import { useLoaderData, Link, Outlet } from 'react-router-dom';
import { useState, useContext } from 'react';
import Cart from '../components/Cart';
import { CartContext } from '../context/cart';
import styled from 'styled-components';

const CartWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 75px;

    .cartModalButton {
        background: ivory;
        color: black;
    }
`

const OuterWrapper = styled.div`
    display: flex;
    margin-top: 30px;

    ul {
        list-style-type: none;
    }

    #category_list {
        width: 25%;
    }

    #products {
        width: 75%;
        margin: 0 30px 0 0;
    }
`

export async function loader() {
    const categories = await fetch('https://fakestoreapi.com/products/categories').then(response => response.json());
    console.log(categories);
    return { categories };
}

export default function Root() {
    const { categories } = useLoaderData();
    const { cartItems, addToCart } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false);

    const toggle = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <h1>Fake Store</h1>
            <CartWrapper>
                {!showModal && <button className='cartModalButton' onClick={toggle}>Cart ({cartItems.length})</button>}
                <Cart showModal={showModal} toggle={toggle}/>
            </CartWrapper>
            <OuterWrapper>
                <div id="category_list">
                    <ul>
                        <Link to="/">all</Link>
                        {categories.map((category, index) => 
                            <li key={index}>
                                <Link to={`category/${category}`}>
                                    {category}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
                <div id="products">
                    <Outlet />
                </div>
            </OuterWrapper>
        </>
        
    );
}