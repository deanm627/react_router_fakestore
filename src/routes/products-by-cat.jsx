import { useLoaderData, Link } from 'react-router-dom';
import styled from 'styled-components';

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
`

export async function loader({ params }) {
    const productList = await fetch(`https://fakestoreapi.com/products/category/${params.category}`).then(response => response.json());
    console.log(productList);
    return { productList };
}

export default function ProductsByCat() {
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