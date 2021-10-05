import React, { useState } from 'react'
import './contact.scss'
import db from '../../config/firebase'
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    console.log(name)

    const submit = (e) => {
        e.preventDefault();
        console.log('hello world')
        const date = new Date().toLocaleDateString(); // 11/16/2015
        db.collection("messages")
            .add({
                name,
                email,
                message,
                date
            })
        setName('')
        setEmail('')
        setMessage('')
    }
    
    return (
        <div class="container contact-form card">
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
            </div>
            <form onSubmit={submit}>
                <h3>Drop Us a Message</h3>
                <div class="form-group m-4">
                    <input required type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div class="form-group m-4">
                    <input required type="email" name="txtEmail" class="form-control" placeholder="Your Email *" value="" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div class="form-group m-4">
                    <textarea required name="txtMsg" class="form-control" placeholder="Your Message *" style={{ width: '100%', height: '150px' }} onChange={(e) => setMessage(e.target.value)} value={message} ></textarea>
                </div>
                <div class="form-group m-4 text-center">
                    <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                </div>
            </form>
        </div>
    )
}
export default Contact