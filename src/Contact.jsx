import React, { useState } from "react";

function Contact(){
    const [data,setData] = useState({
        fullname : "",
        phone : "",
        email: "",
        message : ""
    });

    function handleEvent(event){
        const name = event.target.name;
        const val = event.target.value;
        setData({...data,[name]:val});
    }

    function handleform(e){
        e.preventDefault();
        alert(`my name is ${data.fullname} and my mobile no. is ${data.phone} and my email id is ${data.email} and here is my msge ${data.message}`);
        
    }    
    return <>
        <div className="my-5">
            <h1 className="text-center">Contact US</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={handleform}>
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Full name</label>
                        <input 
                         type="text"
                         class="form-control" 
                         id="exampleFormControlInput1" 
                         placeholder="Enter your name" 
                         autoComplete="off"
                         name="fullname"
                         value={data.fullname}
                         onChange={handleEvent}
                        />
                </div>
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone</label>
                        <input 
                        type="number"
                         class="form-control"
                          id="exampleFormControlInput1" 
                          placeholder="Mobile no." 
                          autoComplete="off"
                          name="phone"
                         value={data.phn}
                         onChange={handleEvent}

                          />
                </div>
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input
                         type="email"
                          class="form-control" 
                          id="exampleFormControlInput1"
                           placeholder="name@example.com" 
                           autoComplete="off"
                           name="email"
                         value={data.mail}
                         onChange={handleEvent}

                           />
                </div>
                <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea 
                        class="form-control"
                         id="exampleFormControlTextarea1" 
                         rows="3"
                         autoComplete="off"
                         name="message"
                         value={data.msg}
                         onChange={handleEvent}
                         ></textarea>
                </div>
                <div class="col-12">
                        <button 
                        class="btn btn-outline-primary" 
                        type="submit"
                        >Submit form</button>
                </div>
                </form>
                </div>
                
            </div>
        </div>
    </>
}

export default Contact;