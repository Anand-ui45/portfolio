import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useMediaQuery } from "react-responsive";

/* eslint-disable react/no-unescaped-entities */
function Contact() {
  const isTablet = useMediaQuery({ maxWidth: 1230 });
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  //
  function handleChange({ target: { name, value } }) {
    setForm({ ...form, [name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await emailjs.send(
        "service_m6eo2xm",
        "template_hozphdc",
        {
          from_name: form.name,
          to_name: "Paramanand",
          from_email: form.email,
          to_email: "ananddevi464@gamil.com",
          message: form.message,
        },
        "xENfHerzE90Z4stYl"
      );
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
      alert("your message has been sent!");
    } catch (err) {
      setLoading(false);
      console.log(err);
      alert("something went worng");
    }
  }

  return (
    <section className="c-space my-20" id='contact'>
       <div className="relative min-h-screen flex items-center justify-center flex-col">
        {!isTablet&& <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />}
        

        <div className="contact-container">
          <h3 className="head-text mt-6">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
