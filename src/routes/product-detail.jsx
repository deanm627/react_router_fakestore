import { useLoaderData, Link } from 'react-router-dom';

export async function loader({ params }) {
    const product = await fetch(`https://fakestoreapi.com/products/${params.productId}`).then(response => response.json());
    return { product };
}

export default function ProductDetail() {
    const { product } = useLoaderData();
    return (
        <>
            <Link to={`/category/${product.category}`}>Back</Link>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.image} />
        </>
    )
}