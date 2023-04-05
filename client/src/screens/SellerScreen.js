
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Store } from '../Store';
import { getError } from '../utils';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
// import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Button from 'react-bootstrap/Button';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                products: action.payload.products,
                page: action.payload.page,
                pages: action.payload.pages,
                loading: false,
            };
        case 'CREATE_REQUEST':
            return { ...state, loading: true };
        case 'CREATE_SUCCESS':
            return { ...state, loading: false };
        case 'CREATE_FAIL':
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};



export default function SellerScreen() {

    const navigate = useNavigate()
    const { search } = useLocation();
    const params = useParams(); // /product/:id
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const { id: productId } = params;


    const [{ loading, error, products,
        pages, }, dispatch] = useReducer(reducer, {
            loading: true,
            error: '',
        });

    const [appartment_name, setAppartment_name] = useState('');
    const [slug, setSlug] = useState('');
    const [rooms, setRooms] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [deposit_amount, setDeposit_amount] = useState('');
    const [carpet_area, setCarpet_area] = useState('');
    const [furnished, setFurnished] = useState('');
    const [price, setPrice] = useState('');
    const [mobile, setMobile] = useState('');
    const [owner, setOwner] = useState('');
    const [location, setLocation] = useState('');
    const [balcony, setBalcony] = useState('');
    const [category, setCategory] = useState('');

    const [file1, setFile1] = useState("");
    const [file2, setFile2] = useState("");
    const [file3, setFile3] = useState("");

    const sp = new URLSearchParams(search);
    const page = sp.get('page') || 1;

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const setimgfile1 = (e) => {
        setFile1(e.target.files1[0])
      }
    const setimgfile2 = (e) => {
        setFile2(e.target.files2[0])
      }
    const setimgfile3 = (e) => {
        setFile3(e.target.files3[0])
      }
      
    const createHandeler = async (e) => {
        e.preventDefault();
        var formData = new FormData();
        // formData.append("image1", file);
        // formData.append("image2", file);
        // formData.append("image1", file1);
        // formData.append("image2", file2);
        // formData.append("image3", file3);

        try {
            dispatch({ type: 'CREATE_REQUEST' });
            const { data } = await axios.post(
                `http://localhost:5000/api/products`,
                {
                    _id: productId,
                    appartment_name,
                    slug,
                    rooms,
                    image1,
                    image2,
                    image3,
                    // formData,
                    deposit_amount,
                    carpet_area,
                    furnished,
                    price,
                    mobile,
                    owner,
                    location,
                    balcony,
                    category,
                },
                {
                    headers: { Authorization: `Bearer ${userInfo.token}` },
                }
            );
            // ctxDispatch({ type: 'CREATE_SUCCESS', payload: data });
            // localStorage.setItem('userInfo', JSON.stringify(data));
            toast.success('product created successfully');
            dispatch({ type: 'CREATE_SUCCESS' });
            // navigate(`/admin/product/${data.product._id}`);
        } catch (err) {
            toast.error(getError(err));
            dispatch({
                type: 'CREATE_FAIL',
            });
        };

    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`/api/products `, {
                    headers: { Authorization: `Bearer ${userInfo.token}` },
                });

                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            } catch (err) { }
        };

        fetchData();

    }, [page, userInfo]);




    return (
        <>
            {userInfo ? (

                <form onSubmit={createHandeler}>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Appartment Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputPassword" value={appartment_name}
                                onChange={(e) => setAppartment_name(e.target.value)}
                                required />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Slug</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputPassword" value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                required />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Rooms</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="inputPassword" value={rooms}
                                onChange={(e) => setRooms(e.target.value)}
                                required />
                        </div>
                    </div>


                    {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>select your image</Form.Label>
                        <Form.Control type="file"  name='image1' */}
                                {/* // onChange={(e) => setImage1(e.target.files[0])}
                                onChange={setimgfile1} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>select your image</Form.Label>
                        <Form.Control type="file"  name='image2' */}
                                {/* // onChange={(e) => setImage1(e.target.files[0])}
                                onChange={setimgfile2} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>select your image</Form.Label>
                        <Form.Control type="file"  name='image3' */}
                                {/* // onChange={(e) => setImage1(e.target.files[0])}
                                onChange={setimgfile3} required />
                    </Form.Group> */}
                    {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>select your image</Form.Label>
                        <Form.Control type="file" value={image2} name='photo'
                                // onChange={(e) => setImage2(e.target.files[0])}
                                onChange={setimgfile}
                                required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>select your image</Form.Label>
                        <Form.Control type="file" value={image3} name='photo'
                                // onChange={(e) => setImage3(e.target.files[0])}
                                onChange={setimgfile}
                                required />
                    </Form.Group> */}





                    <Form.Group className="mb-3" controlId="image">
                            <Form.Label>Image File</Form.Label>
                            <Form.Control
                                value={image1} name='photo'
                                onChange={(e) => setImage1(e.target.value)}
                                required
                            />
                        </Form.Group>
                <Form.Group className="mb-3" controlId="image" >
                            <Form.Label>Image File</Form.Label>
                            <Form.Control
                                value={image2} name='photo'
                                onChange={(e) => setImage2(e.target.value)}
                                required
                            />
                        </Form.Group>
                <Form.Group className="mb-3" controlId="image">
                            <Form.Label>Image File</Form.Label>
                            <Form.Control
                                value={image3} name='photo'
                                onChange={(e) => setImage3(e.target.value)}
                                required
                            />
                        </Form.Group>




                    {/* <div className="mb-3">
                    <label htmlFor="formFile" className="col-sm-2 col-form-label">Image1</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="file" id="formFile" value={image1}
                            onChange={(e) => setImage1(e.target.value)}
                            required />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="formFile" className="col-sm-2 col-form-labell">Image2</label>
                    <input className="form-control" type="file" id="formFile" value={image2}
                        onChange={(e) => setImage2(e.target.value)}
                        required />
                </div>

                <div className="mb-3">
                    <label htmlFor="formFile" className="col-sm-2 col-form-label">Image3</label>
                    <input className="form-control" type="file" id="formFile" value={image3}
                        onChange={(e) => setImage3(e.target.value)}
                        required />
                </div> */}

                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Deposit Amount</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="inputPassword" value={deposit_amount}
                                onChange={(e) => setDeposit_amount(e.target.value)}
                                required />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Carpet Area</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="inputPassword" value={carpet_area}
                                onChange={(e) => setCarpet_area(e.target.value)}
                                required />
                        </div>
                    </div>

                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Furnished</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="furnished" id="flexRadioDefault1" value='No'
                            onChange={(e) => setFurnished('No')}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            No
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="furnished" id="flexRadioDefault2" value='Yes'
                            onChange={(e) => setFurnished('Yes')}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Yes
                        </label>
                    </div>

                    {/* 
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Furnished</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputPassword" value={furnished}
                                onChange={(e) => setFurnished(e.target.value)}
                            required />
                    </div>
                </div>


                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Category</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputPassword" value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            required />
                    </div>
                </div> */}







                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Price</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="inputPassword" value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Mobile No.</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="inputPassword" value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                required />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Owner</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputPassword" value={owner}
                                onChange={(e) => setOwner(e.target.value)}
                                required />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Location</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputPassword" value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Balcony</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="inputPassword" value={balcony}
                                onChange={(e) => setBalcony(e.target.value)}
                                required />
                        </div>
                    </div>


                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Category</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="category" id="flexRadioDefault1" value='For Sale'
                            onChange={(e) => setCategory('For Sale')}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            For Sale
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="category" id="flexRadioDefault2" value='For Rent'
                            onChange={(e) => setCategory('For Rent')}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            For Rent
                        </label>
                    </div>

                    <div className="mb-3">
                        <Button type="submit">
                            Submit
                        </Button>

                    </div>
                </form>

            ) : (<h1>please login first</h1>)}

        </>
    )
}
