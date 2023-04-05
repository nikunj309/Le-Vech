import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import './product.css'
import { useContext } from 'react';
import axios from 'axios';


function Product(props) {
  const navigate = useNavigate();
  const { product } = props;


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




  return (
    // <Card>
    //   <Link to={`/product/${product.slug}`}>
    //     <div className='hover01 column'>
    //       <div>
    //         <figure><img src={product.image1} className="card-img-top" alt={product.name} />
    //         </figure>
    //       </div>
    //     </div>
    //   </Link>
    //   <Card.Body>
    //     <Link to={`/product/${product.slug}`}>
    //       <Card.Title style={{ color: 'black' }}>{product.appartment_name}</Card.Title>
    //     </Link>
    //     <Card.Text>Rs.{product.price}</Card.Text>
    //     <Button  onClick={addToCartHandler}>Save</Button>
    //   </Card.Body>
    // </Card>

    <>
      <div className="product-card">
        <Link to={`/product/${product.slug}`}>
          {/* <div className="badge">{product.category}</div> */}
          {product.category==='For Sale'?<div className="badge" style={{backgroundColor:"red"}}>{product.category}</div>:<div className="badge" style={{backgroundColor:"orange"}}>{product.category}</div>}
          <div className="product-tumb">
            <img src={product.image1} alt="" />
          </div>
        </Link>
        <div className="product-details">
          {/* <span className="product-catagory">Women,bag</span> */}
          <h4><Link to={`/product/${product.slug}`}>{product.appartment_name} </Link></h4>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p> */}
          <div className="product-bottom-details">
            <div className="product-price">Rs.{product.price}</div>
            <div className="product-links">
              <Button onClick={addToCartHandler} >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
              </svg></Button>
              {/* <a href=""><i className="fa fa-shopping-cart"></i></a> */}
            </div>
          </div>
        </div>
      </div>
    </>




    // <>

    //   <div className='content grid3 mtop'>
    //     <div className='box shadow'>
    //       <div className='img'>
    //         <img src={product.image1} alt='' />
    //       </div>
    //       <div className='text'>
    //         <div className='category flex'>
    //           <span style={{ background: product.category === "For Sale" ? "#25b5791a" : "#ff98001a", color: product.category === "For Sale" ? "#25b579" : "#ff9800" }}>{product.category}</span>
    //           <i className='fa fa-heart'></i>
    //         </div>
    //         <h4>{product.appartment_name}</h4>
    //       </div>
    //       <div className='button flex'>
    //         <div>
    //           <button className='btn2'>{product.price}</button> <label htmlFor=''>/sqft</label>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    // </>

    // <>
    //   <section className="listings">
    //     <div className="box-container">
    //       <div className="box">
    //         <div className="thumb">
    //           {/* <p className="total-images"><i class="far fa-image"></i><span>4</span></p> */}
    //           <p className="type"><span>house</span><span>sale</span></p>
    //           <form action="" method="post" className="save">
    //             <button type="submit" name="save" className="far fa-heart"></button>
    //           </form>
    //           <img src={product.image1} alt="" />
    //         </div>
    //         <h3 className="name">modern flats and appartments</h3>
    //         <p className="location"><i className="fas fa-map-marker-alt"></i><span>andheri, mumbai, india - 401303</span></p>
    //         <div className="flex">
    //           <p><i className="fas fa-bed"></i><span>3</span></p>
    //           <p><i className="fas fa-bath"></i><span>2</span></p>
    //           <p><i className="fas fa-maximize"></i><span>750sqft</span></p>
    //         </div>
    //         <a href="view_property.html" className="btn">view property</a>
    //       </div>
    //     </div>
    //   </section>
    // </>
  );
}
export default Product;