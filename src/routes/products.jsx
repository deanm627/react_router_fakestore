import { useLoaderData, Link } from 'react-router-dom';
import Product from '../components/Product';

export async function loader() {
    const productList = await fetch('https://fakestoreapi.com/products').then(response => response.json());
    console.log(productList);
    return { productList };
}

export default function Products() {
    const { productList } = useLoaderData();
    return (
        <Product productList={productList} />
    );
}