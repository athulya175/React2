import { useState } from "react";

function EventOnchange(){
    const [name,setName]=useState("")
    const [quantity,setQuantity]=useState(1)
    const [review,setReview]=useState('')
    const [payment,setPayment]=useState('')
    const [shipping,setShipping]=useState('')
    function handleNameChange(e){
        setName(event.target.value)
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }
    function handleReviewChange(e){
       setReview(e.target.value)
    }
    function handlePaymentMethod(e){
        setPayment(e.target.value)
    }
    function handleShipping(e){
        setShipping(e.target.value)
    }
    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name:{name}</p>
            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity:{quantity}</p>
            <textarea value={review} onChange={handleReviewChange} placeholder="Type your review....">{review}</textarea>
            <p> Review:{review}</p>
            <select value={payment} onChange={handlePaymentMethod}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Master card">Master card</option>
                <option value="Gift card">Gift card</option>
            </select>
            <p>You choose {payment}</p>
            <label>
                <input type="radio" value="pick up" name="Delivery" onChange={handleShipping}></input>
                Pick Up
            </label>
            <label><br/>
                <input type="radio" value="Delivery" name="Delivery" onChange={handleShipping}></input>
                Delivery
            </label>
            <p>you choose:{shipping}</p>
        </div>
    )
}
export default EventOnchange