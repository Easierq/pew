import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { ChevronRight } from "@material-ui/icons";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Software Developer",
        "Mobile App Developer",
        " Developer and Product Designer",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <video autoplay loop class="back-video" muted plays-inline autoPlay>
        <source
          src="assets/pexels-mikhail-nilov-7534244.mp4"
          type="video/mp4"
        />
      </video>
      <div className="overlay"></div>
      <div class="text-box">
        <p>I'M</p>
        <h1>IISIAQ</h1>
        <h3>
          Fullstack <span ref={textRef}></span>
        </h3>
        <div class="row">
          <a href="#portfolio">
            Explore My Portfolio <ChevronRight className="ii" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=23407018943550">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
