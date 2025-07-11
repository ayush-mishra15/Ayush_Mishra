import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaUser, FaTag, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_laczs5c",
        "template_ep0bamj",
        form.current,
        "XRFxFT7ryV1-Y53B0"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-8 rounded-2xl shadow-2xl border border-gray-700">
        <h3 className="text-2xl font-semibold text-white text-center mb-6">
          Let’s Connect <span className="ml-1">🤝</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5">
          {/* Email */}
          <div className="flex items-center bg-[#131025] border border-gray-600 rounded-md p-3">
            <FaEnvelope className="text-purple-500 mr-3" />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="bg-transparent outline-none text-white w-full"
            />
          </div>

          {/* Name */}
          <div className="flex items-center bg-[#131025] border border-gray-600 rounded-md p-3">
            <FaUser className="text-purple-500 mr-3" />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="bg-transparent outline-none text-white w-full"
            />
          </div>

          {/* Subject */}
          <div className="flex items-center bg-[#131025] border border-gray-600 rounded-md p-3">
            <FaTag className="text-purple-500 mr-3" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="bg-transparent outline-none text-white w-full"
            />
          </div>

          {/* Message */}
          <div className="bg-[#131025] border border-gray-600 rounded-md p-3">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="bg-transparent outline-none text-white w-full resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            <FaPaperPlane />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
