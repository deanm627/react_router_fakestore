import { useLoaderData, Link } from 'react-router-dom';
import styled from 'styled-components';

const OuterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: repeat(7, 20%);

    .item {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 75%;
    }

    img {
        width: 50%;
        height: 50%;
    }
`

export async function loader() {
    const productList = await fetch('https://fakestoreapi.com/products').then(response => response.json());
    console.log(productList);
    return { productList };
}

export default function Products() {
    const { productList } = useLoaderData();
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
                        </div>
                    )
                })}
            </OuterWrapper>
        </>
    );
}