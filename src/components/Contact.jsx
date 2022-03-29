import React from "react";

const Contact = () => {
  return (
    <div className="my-10 w-[100vw] overflow-hidden">
      <div className="text-center text-green-500">Contact-Us</div>
      <p className="mx-auto text-center max-w-[410px] text-2xl md:text-4xl my-5 capitalize">
        Reach Out with any question you have
      </p>
      <div className="xl:flex my-20">
        <div className="w-[400px]  mx-auto xl:ml-[200px]">
          <ContactLinks/>
        </div>
        <div className="w-[90vw] md:w-[650px] 2xl:w-[792px] my-10 mx-auto xl:mr-10">
       <ContactForm/> 
        </div>
      </div>
    </div>
  );
};

const ContactLinks = () => {
  return (
    <>
      <div className="text-3xl p-5">contact information</div>
        <div className="flex items-center">
          <img src="images/email.svg" alt="social" /> <div>pparthapaul11@gamil.com</div>
        </div>
        <div  className="flex items-center">
          <img src="images/phone.svg" alt="social" /> <div>1800-562-895, 1800-869-877</div>
        </div>
        <div  className="flex items-center">
          <img src="images/location.svg" alt="social" /> <div>102 Street, India</div>
        </div>
      <div className="text-xl p-5">social media channel</div>
      <div className="flex justify-between p-5">
        <img src="images/Facebook.svg" alt="socialLinks" />
        <img src="images/Linkedin.svg" alt="socialLinks" />
        <img src="images/Github.svg" alt="socialLinks" />
        <img src="images/Twitter.svg" alt="socialLinks" />
      </div>
    </>
  );
};

const ContactForm =()=>{
  return(
    <>  <p className="w-1/2 mx-auto text-center text-xl">
            Fill up the form and our team will get back to you within 24 hours
          </p>
          <div className="flex flex-col sm:flex-row justify-between my-10">
            <input
              className="border-b-2 border-green-500 p-2"
              type="text"
              placeholder="Name"
            />
            <input
              className="border-b-2 border-green-500 p-2"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between my-10">
            <input
              className="border-b-2 border-green-500 p-2"
              type="number"
              placeholder="Phone"
            />
            <input
              className="border-b-2 border-green-500 p-2"
              type="text"
              placeholder="Subject"
            />
          </div>
          <textarea
            className="w-full h-[150px] border-green-500 border-2 block mx-auto p-2"
            placeholder="messege"
          ></textarea>
          <button className="block w-[242px] h-[70px] mx-auto bg-black rounded-[10px] my-10 text-white text-[1.5rem]">
            Submit
          </button>
    </>
  )
}

export default Contact;
