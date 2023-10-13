import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/cart';

const OuterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    .item {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 33%;
    }

    img {
        width: 50%;
        height: 50%;
    }

    .addToCartButton {
        width: 100px;
    }
`

export default function Product({ productList }) {
    const { cartItems, addToCart } = useContext(CartContext)

    return (
        <>
            <OuterWrapper>
                {productList.map(product => {
                    return (
                        <div className="item" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                {product.title}
                            </Link>
                            <img src={product.image} />
                            <p>{product.category}</p>
                            <button type="button" className = "addToCartButton" onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                        
                    )
                })}
            </OuterWrapper>
        </>
    );
}