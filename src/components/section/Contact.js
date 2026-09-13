import React, { useState } from "react";
import { contact, social, identity } from "../../profile";
import SectionStage from "../layouts/SectionStage";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    try {
      const res = await fetch(contact.contactUrl, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section__head" data-reveal>
        <SectionStage variant="contact" />
        <span className="section__index">07</span>
        <h2 className="section__title">Get in Touch</h2>
      </div>

      <div className="contact">
        <div className="contact__pitch" data-reveal>
          <p className="contact__lead">{contact.pitch}</p>
          <a className="contact__email" href={social.email}>
            <i className="fas fa-envelope" /> {contact.email}
          </a>
          <div className="contact__social">
            <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin" />
            </a>
            <a href={social.resume} target="_blank" rel="noopener noreferrer" aria-label="Résumé">
              <i className="fas fa-file-arrow-down" />
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={onSubmit} data-reveal>
          <div className="field">
            <input type="text" name="name" placeholder="Your name" required />
          </div>
          <div className="field">
            <input type="email" name="email" placeholder="Email address" required />
          </div>
          <div className="field">
            <input type="text" name="subject" placeholder="Subject" required />
          </div>
          <div className="field">
            <textarea name="message" rows="4" placeholder="Message" required />
          </div>
          <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Message"}
            {status !== "sending" && <i className="fas fa-paper-plane" />}
          </button>
          {status === "ok" && <p className="form-note form-note--ok">Thanks — I'll get back to you soon.</p>}
          {status === "error" && (
            <p className="form-note form-note--err">
              Something went wrong. Email me directly at {contact.email}.
            </p>
          )}
        </form>
      </div>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {identity.name}
        </span>
        <span className="footer__built">Built with React</span>
      </footer>
    </section>
  );
};

export default Contact;
