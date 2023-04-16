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
      const serviceId = "service_ybihhs6";
      const templateId = "template_gyvuspi";
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

      <h1 className="text-center pt-[10%] pb-5 text-3xl text-[#2e131c] font-bold">
        Contact me
        <hr className="hidden md:block w-[40%] border-[#2e131c] border-[1px] translate-x-[75%]"></hr>
      </h1>
      <div className="grid md:grid-cols-2 w-full md:px-5 md:pt-10 md:pb-10 md:mb-10">
        <aside className="w-full self-center">
          <h4 className="text-[#2e131c] leading-10 ">thank you for visiting the site</h4>
          <hr className="w-[50%] pb-5 border-[#2e131c]"></hr>
          <p className="text-[#36261b] leading-10">
            have any inquiries?
          </p>
          <p className="text-[#2e131c] leading-10">
            any hate mail? (keep it to yourself)
          </p>
          <p className="text-[#2e131c] leading-10">
            any compliments? (preferable)
          </p>
          <p className="text-[#2e131c] leading-10">
            get in contact with me here
          </p>
        </aside>
        <form className="w-full flex flex-col items-center">
          <div className="relative z-0 w-full mb-6 group border-b-1 border-[#2e131c] peer-focus:border-[#2e131c]">
            <input
              type="text"
              name="floating_name"
              id="floating_name"
              className="block py-2.5 px-0 w-full text-sm text-[#2e131c] bg-transparent border-0 border-b-2 border-[#2e131c] appearance-none focus:outline-none focus:ring-0 focus:border-[#573d2b] peer"
              placeholder=" "
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label

              className="peer-focus:font-medium absolute text-sm text-[#503674] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#2e131c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group border-b-1 border-[#2e131c] peer-focus:border-[#2e131c]">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-[#2e131c] bg-transparent border-0 border-b-2 border-[#2e131c] appearance-none focus:outline-none focus:ring-0 focus:border-[#573d2b] peer"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label

              className="peer-focus:font-medium absolute text-sm text-[#503674] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#2e131c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group border-b-1 border-[#2e131c] peer-focus:border-[#2e131c]">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              className="block py-2.5 px-0 w-full text-sm text-[#2e131c] bg-transparent border-0 border-b-2 border-[#2e131c] appearance-none focus:outline-none focus:ring-0 focus:border-[#573d2b] peer"
              placeholder=" "
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label

              className="peer-focus:font-medium absolute text-sm text-[#503674] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#2e131c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-800"
            onClick={submit}
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 text-white bg-[#2e131c] rounded-md group-hover:bg-opacity-0">
      Send
  </span>
          </button>
        </form>
      </div>

      {showMessageModal && <MessageAlert setOpenMessageModal={setshowMessageModal} />}
    </>
  );
};

export default Contact;
