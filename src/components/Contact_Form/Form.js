import React, { useState } from "react";


const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    
  return (
    <>
      <form onSubmit={handleSubmit} className="md:mt-0 mt-4 px-8  pb-8">
        <div className="mb-12">
       
          <input
            className="border rounded w-full py-2 px-3 text-slate-200 leading-tight border-slate-800 md:text-xl text-md md:h-12 h-11 bg-[#1e262f] focus:ring-0"
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-12">
         
          <input
            className="border rounded w-full py-2 px-3 text-slate-200 leading-tight border-slate-800 md:text-xl text-md md:h-12 h-11 bg-[#1e262f] focus:ring-0"
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
       
          <textarea
           className="border rounded w-full py-2 px-3 text-slate-200 leading-tight border-slate-800 md:text-xl text-md  bg-[#1e262f] focus:ring-0"
            id="message"
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ resize: "none" }} 
          />
        </div>
        <div className="flex items-center md:justify-between justify-center">
          <button
            className="border rounded bg-transparent hover:bg-blue-700 text-slate-300 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-slate-600 hover:text-white hover:bg-[#1e262f] hover:ring-0"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
