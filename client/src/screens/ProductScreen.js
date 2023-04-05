import axios from 'axios';
import { useContext, useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import SimpleImageSlider from "react-simple-image-slider";
import ListGroup from 'react-bootstrap/ListGroup';


import { Helmet } from 'react-helmet-async';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';
import './productscreen.css'
import { Store } from '../Store';
import Button from 'react-bootstrap/esm/Button';


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, product: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};



function ProductScreen() {


    const navigate = useNavigate();

    const params = useParams();
    const { slug } = params;


    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: '',
    });
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get(`http://localhost:5000/api/products/slug/${slug}`);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
            }
        };
        fetchData();
    }, [slug]);




    // var counter = 1;
    // setInterval(function () {
    //     document.getElementById('radio' + counter).checked = true;
    //     counter++;
    //     if (counter > 4) {
    //         counter = 1;
    //     }
    // }, 5000);


    //context api use to save the propeties in save page

    const { state, dispatch: ctxDispatch } = useContext(Store);



    const { save } = state;
    const addToCartHandler = async () => {
        const existItem = save.savedItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`http://localhost:5000/api/products/${product._id}`);

        ctxDispatch({
            type: 'SAVE_ADD_ITEM',
            payload: { ...product, quantity },
        });
        navigate('/save');
    };

    return loading ? (
      
        <div>Loading...</div>
    ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
    ) : (
        <>
        <div className='borderbox' style={{ display: "flex", justifyContent: 'center' }}>
            {/* <div style={{ justifyContent: 'center' }}> */}


            {/* <Row>
                
                <Col > */}



            {/* <img
                        className="img-large"
                        src={product.image}
                        alt={product.appartment_name}
                    ></img> */}

            <div className="slider">
                <div className="slides">

                    <input type="radio" name="radio-btn" id="radio1" defaultChecked />
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />
                    {/* <input type="radio" name="radio-btn" id="radio4" /> */}

                    <div className="slide first">
                        <img src={product.image1} alt="" />
                    </div>
                    <div className="slide">
                        <img src={product.image2} alt="" />
                    </div>
                    <div className="slide">
                        <img src={product.image3} alt="" />
                    </div>
                    {/* <div className="slide">
                        <img src={product.image} alt="" />
                    </div> */}

                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        {/* <div className="auto-btn4"></div> */}
                    </div>

                </div>

                <div className="navigation-manual">
                    <label htmlFor="radio1" className="manual-btn"></label>
                    <label htmlFor="radio2" className="manual-btn"></label>
                    <label htmlFor="radio3" className="manual-btn"></label>
                    {/* <label htmlFor="radio4" className="manual-btn"></label> */}
                </div>

            </div>


            {/* </Col>
            </Row>
            <div className='detbox'>
                <Row>

            <h1>{product.appartment_name}</h1>
            <Col >
            <div className='flex-container'>
                        <div className='flex-child'>
                            <ListGroup variant="flush">

            <ListGroup.Item>
            <Helmet>
                                    <title>{product.appartment_name}</title>
                                </Helmet>
            </ListGroup.Item>

            <ListGroup.Item><p>Pirce : Rs.{product.price}</p></ListGroup.Item>
                                <ListGroup.Item><p>location : {product.location}</p></ListGroup.Item>
                                <ListGroup.Item><p>balcony : {product.balcony}</p></ListGroup.Item>
                                <ListGroup.Item><p>mobile : {product.mobile}</p></ListGroup.Item>
                                <ListGroup.Item><p>furnished : {product.furnished}</p></ListGroup.Item>
                            </ListGroup>
                        </div> */}
            {/* </Col>
                    <Col> */}
            {/* <div className='flex-child'>
                            <ListGroup variant="flush">
                                <ListGroup.Item><p>carpet area : {product.carpet_area} sqrf</p></ListGroup.Item>
                                <ListGroup.Item><p>deposit amount : Rs.{product.deposit_amount}</p> </ListGroup.Item>
                                <ListGroup.Item>
                                    <p> rooms:
                                        {product.rooms}</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <p> owner:
                                        {product.owner}</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div>
            </Col>
 */}





            


            {/* </div> */}


        </div >
        <div className='prodata'>

                <h1>{product.appartment_name}</h1>
                <Col>
                    <div className='flex-container'>
                        <div className='flex-child'>
                            <ListGroup variant="flush">

                                <ListGroup.Item>
                                    <Helmet>
                                        <title>{product.appartment_name}</title>
                                    </Helmet>
                                </ListGroup.Item>

                                <ListGroup.Item><p>Price : Rs.{product.price}</p></ListGroup.Item>
                                <ListGroup.Item><p>Location : {product.location}</p></ListGroup.Item>
                                <ListGroup.Item><p>Balcony : {product.balcony}</p></ListGroup.Item>
                                <ListGroup.Item><p>Mobile : {product.mobile}</p></ListGroup.Item>
                                <ListGroup.Item><p>Furnished : {product.furnished}</p></ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='flex-child'>
                        <ListGroup variant="flush">
                            <ListGroup.Item><p>Carpet Area : {product.carpet_area} sqft</p></ListGroup.Item>
                            <ListGroup.Item><p>Deposit Amount : Rs.{product.deposit_amount}</p> </ListGroup.Item>
                            <ListGroup.Item>
                                <p> Rooms:
                                    {product.rooms}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p> Owner:
                                    {product.owner}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Button onClick={addToCartHandler} variant="primary">
                    Save Property
                </Button>
            </div>
         {/* </div> */}
        </>
    );
}
export default ProductScreen;


{/* <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Helmet>
                                <title>{product. appartment_name}</title>
                            </Helmet>
                            <h1>{product. appartment_name}</h1>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating
                                rating={product.rating}
                                numReviews={product.numReviews}
                            ></Rating>
                        </ListGroup.Item>
                        <ListGroup.Item>Pirce : ${product.price}</ListGroup.Item>
                        <ListGroup.Item>location : <p>{product.location}</p></ListGroup.Item>
                        <ListGroup.Item>balcony : <p>{product.balcony}</p></ListGroup.Item>
                        <ListGroup.Item>mobile : <p>{product.mobile}</p></ListGroup.Item>
                        <ListGroup.Item>furnished : <p>{product.furnished}</p></ListGroup.Item>
                        <ListGroup.Item>carpet area : <p>{product.carpet_area} sqrt</p></ListGroup.Item>
                        <ListGroup.Item>deposit amount : ${product.deposit_amount} </ListGroup.Item>
                        <ListGroup.Item>
                            rooms:
                            <p>{product.rooms}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        owner:
                            <p>{product.owner}</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col> */}