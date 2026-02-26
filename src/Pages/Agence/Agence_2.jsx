import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Page() {

  useEffect(() => {
    gsap.from(".animate", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".section2",
        start: "top 80%",
      }
    });
  }, []);

  return (
    <div className="bg-black text-white">

      {/* Section 1 */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-5xl">Section 1</h1>
      </section>

      {/* Section 2 */}
      <section className="section2 min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-900">
        <h2 className="animate text-4xl">Section 2 Visible</h2>
        <p className="animate">Ab ye scroll pe dikhega</p>
        <img
          className="animate w-64"
          src="https://picsum.photos/400/300"
          alt=""
        />
      </section>

    </div>
  );
}