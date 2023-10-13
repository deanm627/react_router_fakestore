import { useLoaderData, Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const OuterWrapper = styled.div`
    display: flex;
    margin-top: 30px;

    ul {
        list-style-type: none;
    }

    #category_list {
        width: 25%;
    }
`

export async function loader() {
    const categories = await fetch('https://fakestoreapi.com/products/categories').then(response => response.json());
    console.log(categories);
    return { categories };
}

export default function CategoryList() {
    const { categories } = useLoaderData();

    return (
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
        </OuterWrapper>
        
    );
}

