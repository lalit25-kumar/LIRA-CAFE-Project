import { useEffect, useState } from "react";
import "./Contact.css";
import { TypeAnimation } from "react-type-animation";
import {
  FaLocationDot,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

function Contact() {
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        const sectionTop = contactSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 150 && sectionTop > -300) {
          setAnimateHeading(false);

          setTimeout(() => {
            setAnimateHeading(true);
          }, 80);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <p className="contact-tag">Stay Connected</p>

          <h2
            className={
              animateHeading
                ? "contact-heading heading-active"
                : "contact-heading"
            }
          >
            Visit Lira Cafe Today
          </h2>

          <div className="cafe-highlight-line">
            <TypeAnimation
              sequence={[
                "New cafe in Udaipur | Best sunset views & nightlife vibes",
                8000,
                "",
                700,
              ]}
              speed={60}
              repeat={Infinity}
            />
          </div>

          <div className="contact-text">
            <TypeAnimation
              sequence={[
                "Enjoy fresh coffee, delicious food and peaceful vibes at Lira Cafe. Connect with us for location, updates, bookings and quick enquiries.",
                12000,
                "",
                800,
              ]}
              speed={70}
              repeat={Infinity}
            />
          </div>

          <div className="opening-hours">
            <h3>⏰ Opening Hours</h3>

            <div className="time-row">
              <span>Every Day</span>
              <span>02:00 PM - 12:00 AM</span>
            </div>
          </div>
        </div>

        <div className="contact-cards">
          <a
            href="https://maps.app.goo.gl/TAod4pAAkDgXM9jy9"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaLocationDot />
            <h3>Location</h3>
            <p>Find Us on Google Maps</p>
          </a>

          <a
            href="https://www.instagram.com/liraudaipur?igsh=NjkzY3M3cTh2OWlm"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaInstagram />
            <h3>Instagram</h3>
            <p>@liraudaipur</p>
          </a>

          <a href="tel:+919998714400" className="contact-card">
            <FaPhone />
            <h3>Call Us</h3>
            <p>+91 99987 14400</p>
          </a>

          <a
            href="https://wa.me/919998714400"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaWhatsapp />
            <h3>WhatsApp</h3>
            <p>Message Us</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;