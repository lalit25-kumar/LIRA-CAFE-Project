import { useEffect, useState } from "react";
import "./GalleryPage.css";
import { TypeAnimation } from "react-type-animation";

import image1 from "../image/gallery/image1.webp";
import image2 from "../image/gallery/image2.webp";
import image3 from "../image/gallery/image3.webp";
import image4 from "../image/gallery/image4.webp";
import image5 from "../image/gallery/image5.webp";
import image6 from "../image/gallery/image6.webp";
import image7 from "../image/gallery/image7.webp";
import image8 from "../image/gallery/image8.webp";
import image9 from "../image/gallery/image9.webp";
import image10 from "../image/gallery/image10.webp";
import image11 from "../image/gallery/image11.webp";
import image12 from "../image/gallery/image12.webp";
import image13 from "../image/gallery/image13.webp";
import image14 from "../image/gallery/image14.webp";
import image15 from "../image/gallery/image15.webp";
import image16 from "../image/gallery/image16.webp";
import image17 from "../image/gallery/image17.webp";
import image18 from "../image/gallery/image18.webp";
import image19 from "../image/gallery/image19.webp";
import image20 from "../image/gallery/image20.webp";

function GalleryPage() {
  // Ye state typing effect ko start/stop karegi
  const [startTyping, setStartTyping] = useState(false);

  // Ye state heading animation ko start/stop karegi
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const gallerySection = document.querySelector(".gallery-page");

      if (gallerySection) {
        const sectionTop = gallerySection.getBoundingClientRect().top;
        const sectionBottom = gallerySection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Jab Gallery section screen me dikhega tab heading + typing dono start honge
        if (sectionTop < windowHeight - 150 && sectionBottom > 150) {
          setStartTyping(true);
          setAnimateHeading(true);
        } else {
          // Section se bahar jaate hi dono reset ho jayenge
          setStartTyping(false);
          setAnimateHeading(false);
        }
      }
    };

    // Scroll hone par check karega ki section visible hai ya nahi
    window.addEventListener("scroll", handleScroll);

    // Page reload hone par bhi ek baar check karega
    handleScroll();

    // Component remove hone par listener remove ho jayega
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const images = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15,
    image16, image17, image18, image19, image20,
  ];

  return (
    <section className="gallery-page">
      <div className="gallery-hero">
        <p>Lira Cafe Gallery</p>

        <h1
          className={
            animateHeading
              ? "gallery-heading heading-active"
              : "gallery-heading"
          }
        >
          Moments, Memories & Nightlife Vibes
        </h1>

        <span>
          {/* Gallery section me aate hi typing effect start hoga */}
          {startTyping && (
            <TypeAnimation
              key={startTyping}
              sequence={[
                "Explore the ambience, food, coffee and beautiful corners of Lira Cafe.",
              ]}
              speed={60}
              cursor={true}
              repeat={0}
            />
          )}
        </span>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt={`Lira Cafe Gallery ${index + 1}`} />

            <div className="gallery-overlay">
              <h3>Lira Cafe</h3>
              <p>View Moment</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GalleryPage;