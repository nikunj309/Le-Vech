import { useEffect, useReducer } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import MessageBox from '../components/MessageBox';
import './homescreen.css'
import Featured from '../components/Featured/Featured';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

function HomeScreen() {

    const [{ loading, error, products }, dispatch] = useReducer(reducer, {
        products: [],
        loading: true,
        error: '',
    });


    useEffect(() => {
        const fetchData = async () => {

            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get('http://localhost:5000/api/products');
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }


        };
        fetchData();
    }, []);


    return (
        <>
            <div>
                <Helmet>
                    <title>Le-Vech</title>
                </Helmet>

                <div>
                    <Featured />
                </div>

                <div style={{marginTop:"60px"}}>
                    <h1>Explore Some Real Estate Options</h1>
                    <div className="products">
                        {loading ? (
                            <div>Loading...</div>
                        ) : error ? (
                            <MessageBox variant="danger">{error}</MessageBox>
                        ) : (
                            <Row>
                                <>
                                    {products.map((product) => (
                                        // <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                                        <Col key={product.slug} >
                                            <Product product={product}></Product>
                                        </Col>
                                    ))}
                                </>
                            </Row>
                        )}
                    </div>
                </div>
            </div>

            {/* <div>
                <Featured/>
            </div> */}

        </>
    );
}
export default HomeScreen;