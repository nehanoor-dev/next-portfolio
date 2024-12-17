'use client'
import React, {useState} from 'react';
import { FaArrowRight } from "react-icons/fa6";

function ContactSection() {
  interface formData {
    name: string;
    email: string,
    message: string;
  }
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
      const [status, setStatus] = useState("");
    
      const handleChange = async(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
      const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
            ) => {
         e.preventDefault();
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          if (res.ok) {
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
          } else {
            setStatus("Something went wrong. Please try again.");
          }
        }
        catch(err){
          console.log(err)
        } 
        };
  return (
    <section className='mt-10 scroll-smooth' id='contact'>
        <h1 className='heading'>Contact Me</h1>
        <div className="max-w-lg p-6 mx-auto">
      {status && <p className="text-center mb-4 text-green-600">{status}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Name'
            required
            className="w-full p-3 border-4 border-yellow-300 bg-transparent rounded-md"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            required
            className="w-full p-3 border-4 border-yellow-300 bg-transparent rounded-md"
          />
        </div>

        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
             onChange ={handleChange}
            placeholder='Write message here...'
            required
            className="w-full p-3 border-4 border-yellow-300 bg-transparent rounded-md"
          />
        </div>

        <button
          type="submit"
          className="text-lg text-gray-100 rounded-3xl font-bold py-2 px-5 
          bg-transparent bg-clip bg-gradient-to-r from-pink-400 to-purple-600"
        >
            <div className='flex flex-row mx-auto'>
                <span>
                Send Message
                </span>
                <FaArrowRight className='text-white mx-2 my-auto' />
            </div>
        </button>
      </form>
    </div>
    </section>
  )
}

export default ContactSection