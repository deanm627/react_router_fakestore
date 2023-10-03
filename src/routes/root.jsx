import { Link, Outlet } from 'react-router-dom';
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

    #products {
        width: 75%;
        margin: 0 30px 0 0;
    }
`

export default function Root() {
    
    return (
        <>
            <h1>Fake Store</h1>
            <OuterWrapper>
                <div id="category_list">
                    <ul>
                        <li>Category 1</li>
                        <li>Category 2</li>
                        <li>Category 3</li>
                        <li>Category 4</li>
                    </ul>
                </div>
                <div id="products">
                    <Outlet />
                </div>
            </OuterWrapper>
        </>
        
    );
}