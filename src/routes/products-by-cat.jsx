import { useLoaderData, Link } from 'react-router-dom';
import Product from '../components/Product';
import styled from 'styled-components';

export async function loader({ params }) {
    const productList = await fetch(`https://fakestoreapi.com/products/category/${params.category}`).then(response => response.json());
    console.log(productList);
    return { productList };
}

export default function ProductsByCat() {
    const { productList } = useLoaderData();
    return (
        <Product productList={productList} />
    );
}