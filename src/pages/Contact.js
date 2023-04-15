import React, { useState } from "react";
import emailjs from "emailjs-com";
import MessageAlert from "../components/MessageAlert";

// TODO: change email service - connect to client account

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [emailSent, setEmailSent] = useState(false);
  const [showMessageModal, setshowMessageModal] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_8d2kh4s";
      const templateId = "template_2jx1965";
      const userId = "cAKDVSNdfmuFAqd55";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      // setEmailSent(true);
      setshowMessageModal(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>

      <h1 className="text-center pt-5 pb-5 font-bold">
        Contact me
        <hr className="w-[130%] -translate-x-8"></hr>
      </h1>
      <div className="grid md:grid-cols-2 w-full md:px-5 md:pt-10 md:pb-10 md:mb-10">
        <aside className="w-full self-center">
          <h4 className="text-[#312218] ">thank you for visiting the site</h4>
          <hr className="w-[50%] pb-5"></hr>
          <p className="text-[#36261b]">
            have any inquiries?
          </p>
          <p className="text-[#36261b]">
            any hate mail? (keep it to yourself)
          </p>
          <p className="text-[#36261b]">
            any compliments? (preferable)
          </p>
          <p className="text-[#36261b]">
            get in contact with me here
          </p>
        </aside>
        <form className="w-full flex flex-col items-center">
          <div className="relative z-0 w-full mb-6 group border-b-2 border-[#885f43] peer-focus:border-[#573d2b]">
            <input
              type="text"
              name="floating_name"
              id="floating_name"
              className="block py-2.5 px-0 w-full text-sm text-[#573d2b] bg-transparent border-0 border-b-2 border-[#885f43] appearance-none focus:outline-none focus:ring-0 focus:border-[#573d2b] peer"
              placeholder=" "
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label

              className="peer-focus:font-medium absolute text-sm text-[#78543b] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#573d2b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group border-b-2 border-[#885f43] peer-focus:border-[#573d2b]">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-[#573d2b] bg-transparent border-0 border-b-2 border-[#885f43] appearance-none focus:outline-none focus:ring-0 focus:border-[#573d2b] peer"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label

              className="peer-focus:font-medium absolute text-sm text-[#78543b] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#573d2b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group border-b-2 border-[#885f43] peer-focus:border-[#573d2b]">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              className="block py-2.5 px-0 w-full text-sm text-[#573d2b] bg-transparent border-0 border-b-2 border-[#885f43] appearance-none focus:outline-none focus:ring-0 focus:border-[#573d2b] peer"
              placeholder=" "
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label

              className="peer-focus:font-medium absolute text-sm text-[#78543b] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#573d2b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-2 p-2.5 flex-1 text-white hover:bg-[#825c40] bg-[#624530] rounded-md outline-none ring-offset-2 ring-[#825c40] focus:ring-2 text-sm sm:w-auto px-5 py-2.5 text-center"
            onClick={submit}
          >
            Submit
          </button>
        </form>
      </div>

      {showMessageModal && <MessageAlert setOpenMessageModal={setshowMessageModal} />}
    </>
  );
};

export default Contact;
