import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import image1 from "../../Components/Images/image_1.jpg";
import image2 from "../../Components/Images/image_2.jpg";
import image3 from "../../Components/Images/image_3.jpg";
import image4 from "../../Components/Images/image_4.jpg";
import image5 from "../../Components/Images/image_5.jpg";
import image6 from "../../Components/Images/image_6.jpg";
import image7 from "../../Components/Images/image_7.jpg";
import image8 from "../../Components/Images/image_8.jpg";
import image9 from "../../Components/Images/image_9.jpg";
import image10 from "../../Components/Images/image_10.jpg";
import image11 from "../../Components/Images/image_11.jpg";

const Agence = () => {
  const scroll = new LocomotiveScroll();
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 10%",
        end: "top -100%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <div className="w-full  bg-white text-black">
      {/* Hero Section - Fixed for Mobile/Tablet */}
      <div className="w-full min-h-screen flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center mb-8 sm:mb-12 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-tight">
            Soixan7e
            <br />
            Douze
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed text-black max-w-2xl">
            Notre curiosité nourrit notre créativité. On reste humbles et on dit
            non aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C'est pour ça qu'on s'engage à donner de la perspective, pour bâtir
            des marques influentes. Notre curiosité nourrit notre créativité. On
            reste humbles et on dit non aux gros egos, même le vôtre. Une marque
            est vivante. Elle a des valeurs, une personnalité, une histoire. Si
            on oublie ça, on peut faire de bons chiffres à court terme, mais on
            la tue à long terme. C'est pour ça qu'on s'engage à donner de la
            perspective, pour bâtir des marques influentes.
          </p>
        </div>
        <div
          ref={imageDivRef}
          className="w-full lg:w-1/2 flex items-center justify-center"
        >
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-xl mt-0 lg:-mt-96">
            <img
              ref={imageRef}
              src={image1}
              alt="Agence"
              className="w-full h-auto rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Expertise Section - Fixed for Mobile/Tablet */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-3 lg:mb-4">
            Expertise
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-600">
            Strategic Publicate
          </h2>
        </div>

        {/* Expertise List - Fixed Grid for Mobile/Tablet */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {["Publicate", "Branding", "Design", "Contenue"].map(
            (item, index) => (
              <div key={index} className="border-t-2 border-black pt-3 sm:pt-4 lg:pt-6">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-3xl font-medium">
                  {item}
                </h3>
              </div>
            ),
          )}
        </div>

        {/* Bottom Text Sections - Fixed for Mobile/Tablet */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
          {/* First Text Block */}
          <div className="max-w-4xl">
            <p className="text-base sm:text-lg md:text-xl lg:text-4xl leading-relaxed text-black lg:text-black">
              Nos projets_ naissent dans l'humilité, grandissent dans la
              curiosité et vivent grâce à la créativité sous toutes ses formes
            </p>
          </div>

          {/* Second Text Block */}
          <div className="max-w-4xl">
            <p className="text-base sm:text-lg md:text-xl lg:text-4xl leading-relaxed text-black lg:text-black">
              Notre création_ bouillonne dans un environnement où le talent a le
              goût d'exploser. Où on se sent libred'ê
            </p>
          </div>
        </div>
      </div>

      {/* Extra Spacing for Scroll */}
      
    </div>
  );
};

export default Agence;