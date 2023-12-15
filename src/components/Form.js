import React from 'react'
import { useState } from 'react'

const Form = () => {
  
    const[formData, setFormData] = useState({firstName:"", lastName:"", email:"", address:"", city:"", state:"", pinCode:"", comment:false, candidate:false, offer:false, radio:"", country:""  })

    function changeHandler(event){
        const{name, value, checked, type} = event.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name] : type==='checkbox' ? checked : value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        console.log(formData);
    }

    return (
    <div className='wrapper'>
        <form onSubmit={submitHandler}>
            <label htmlFor='firstName' className='text'>First Name</label>
            <br></br>
            <input className='ip' type='text' placeholder='First' name="firstName" id='firstName' value={formData.firstName} onChange={changeHandler}></input>

            <br></br>
            <label htmlFor='lastName' className='text'>Last Name</label>
            <br></br>
            <input className='ip' type='text' placeholder='Last' name="lastName" id='lastName' value={formData.lastName} onChange={changeHandler}></input>

            <br></br>
            <label htmlFor='email' className='text'>Email Address</label>
            <br></br>
            <input className='ip' type='email' placeholder='abc@gmail.com' name="email" id='email' value={formData.email} onChange={changeHandler}></input>

            <br></br>
            <label htmlFor='country' className='text'>Country</label>
            <br></br>
            <select className='dropDown' name='country' id='country' value= {formData.country} onChange={changeHandler}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Japan">Japan</option>
                <option value="Germany">Germany</option>
                <option value="Russia">Russia</option>
            </select>

            <br></br>
            <label htmlFor='address' className='text'> Street Address</label>
            <br></br>
            <input className='ip' type='text' placeholder='Address' name='address' id='address' value={formData.address} onChange={changeHandler}></input>
            
            <br></br>
            <label htmlFor='city' className='text'> City</label>
            <br></br>
            <input className='ip' type='text' placeholder='City' name='city' id='city' value={formData.city} onChange={changeHandler}></input>

            <br></br>
            <label htmlFor='state' className='text'> State</label>
            <br></br>
            <input className='ip' type='text' placeholder='State' name='state' id='state' value={formData.state} onChange={changeHandler}></input>

            <br></br>
            <label htmlFor='pinCode' className='text'> ZIP / Postal Code</label>
            <br></br>
            <input className='ip' type='number' placeholder='Pin' name='pinCode' id='pinCode' value={formData.pinCode} onChange={changeHandler}></input>

            <br></br>
            <label className='email'>By Email</label>
            <br></br>
            
            <input type='checkbox' name='comment' id='comment' checked={formData.comment} onChange={changeHandler}/>
            <label className='title' htmlFor='comment'>Commments</label>
            <br></br>
            <label className='msg'>Get notified when someones posts a comment on a posting</label>
            <br></br>

            <input type='checkbox' name='candidate' id='candidate' checked={formData.candidate} onChange={changeHandler}/>
            <label className='title' htmlFor='candidate'>Candidates</label>
            <br></br>
            <label className='msg'>Get notified when a candidate applies for a job</label>
            <br></br>

            <input type='checkbox' name='offer' id='offer' checked={formData.offer} onChange={changeHandler}/>
            <label className='title' htmlFor='offer'>Offers</label>
            <br></br>
            <label className='msg'>Get notified when a candidate accepts or rejects an offer</label>
            <br></br>

            <label className='push'>Push Notifications</label>
            <br></br>
            <label className='sms' >These are delivered via SMS to your mobile phone</label>
            <br></br>

            <input type='radio' name='radio' id='everything' checked={formData.radio === ""} onChange={changeHandler}></input>
            <label htmlFor='everything' className='noti'>Everything</label>
            <br></br>

            <input type='radio' name='radio' id='same' checked={formData.radio === ""} onChange={changeHandler}></input>
            <label htmlFor='same' className='noti'>Same as email</label>
            <br></br>

            <input type='radio' name='radio' id='push' checked={formData.radio === ""} onChange={changeHandler}></input>
            <label htmlFor='push' className='noti'>No push Notifications</label>
            <br></br>
            
            <button>Save</button>


        </form>
    </div>
  )
}

export default Form