import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { removeFromWishlist } from '../redux/wishlistSlice';
import { Link } from 'react-router-dom';
import { addtoCartList } from '../redux/cartSlice';

function Wishlist() {
  const wishListItem=useSelector((state)=>state. wishlistReducer)
  console.log("wishlist items in wishlist page");
  console.log(wishListItem);
  const dispatch=useDispatch();
  const handleWishlist=(item)=>{
    dispatch(addtoCartList(item))
    dispatch(removeFromWishlist(item.id))
  }
  
  
  return (
  <>
   <button className='btn btn-success m-4 ms-4'>
    <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
    <i class="fa-solid fa-arrow-left me-2"></i>
    BACK TO HOME
    </Link>
     
    </button>
   <Row className='m-5'>
   
        {
            wishListItem?.length>0?
            wishListItem.map((item)=>(
                <Col sm={12} md={6} lg={4} xl={3} className='mb-3'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image}  height={'200px'} className='p-3'/>
                <Card.Body>
                  <Card.Title>{item.title.slice(0,20)}...</Card.Title>
                  <Card.Text>
                  <p>{item.description.slice(0,50)}...</p>
                  <p className='fw-bolder'>Price: &#8377; {item.price}</p>
                  </Card.Text>
                  <div className='d-flex align-items-center justify-content-between'>
                  <Button variant="outline-danger"onClick={()=>dispatch(removeFromWishlist(item.id))}>
                  <i class="fa-solid fa-trash"></i>
                    </Button>
                  <Button variant='outline-success' onClick={()=>handleWishlist(item)}><i class="fa-solid fa-cart-shopping"></i></Button>
                  </div>
                
                </Card.Body>
              </Card>
                </Col>
            ))
        :
            <div style={{ height:'100vh'}} className='d-flex align-items-center flex-column'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcVZ3sU_FjNWLh8uASOfQLTzgsI669zQZ87w&s"
               height="300px" alt="" />
               <h3>Your Cart is Empty</h3>
            </div>
        }
     
    </Row>
   </>
  )
}

export default Wishlist