import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const cartListItem=useSelector((state)=>state. cartReducer);
  const dispatch=useDispatch();
  // hook used to navigate toa particular path or page
  const navigate=useNavigate()
  const [total,setTotal]=useState(0)
  const getTotal=()=>{
    let sum=0;
    cartListItem.forEach((item)=>{
      sum=sum+item.price;
    })
    setTotal(sum)
  }
  useEffect(()=>{
    getTotal()
  },[cartListItem])
  const handleCart=()=>{
    alert("Thank you .. your order placed sucessfully....")
    dispatch(emptyCart());
    navigate('/')
  }
  return (
    <>
    <div style={{marginTop:'100px'}}>
     
        {
          cartListItem?.length>0?
          <div className='row w-100'>
          <div className='col-lg-6 m-5'>
          <table className='table shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Products Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>  
              {
                cartListItem?.map((item,index)=>(
                  <tr>
                  <td>{index+1}</td>
                  <td>{item.title.slice(0,20)}...</td>
                  <td><img src={item.image} alt="" height="75px" width="75px"/></td>
                  <td>₹{item.price}</td>
                  <td><Button variant="outline-danger" onClick={()=>dispatch(removeFromCart(item.id))}><i class="fa-solid fa-trash"></i></Button></td>
                </tr>
                ))
              }               
           
            </tbody>
          </table>
        </div>
        <div className='col-lg-4'>
          <div className='border shadow p-5'>
            <h3 className='text-primary'>Cart histroy</h3>
            <h5 className=''>Total Number of Products: <span className='text-warning fw-bolder'>{cartListItem?.length}</span> </h5>
            <h5>Total Price: <span className='text-warning fw-bolder'>₹{total}</span> </h5>
            <button className='btn btn-success rounded w-100' onClick={handleCart}>Check Out</button>
          </div>
        </div>
      </div>:
        <div style={{ height:'100vh'}} className='d-flex align-items-center flex-column'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcVZ3sU_FjNWLh8uASOfQLTzgsI669zQZ87w&s"
         height="300px" alt="" />
         <h3>Your Cart is Empty</h3>
      </div>
        }
       
      </div>
   
    </>
  )
}

export default Cart