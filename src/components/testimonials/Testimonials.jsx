import "./testimonials.scss";
import { Computer, Android, Storage } from "@material-ui/icons";

export default function Testimonials() {
  return (
    <div className="testimonials" id="services">
      <h1>Services</h1>
      <div className="container">
        <div className="card">
          <Computer className="icon" />
          <h4>Front-End</h4>
          <p>
            Building of front-end projects using technologies like Angular,
            React, Javascript, Typescript, Css, Sass, Tailwind css, Bootstrap,
            Redux.....
          </p>
        </div>
        <div className="card">
          <Storage className="icon" />
          <h4>Back-End</h4>
          <p>
            Building of back-end projects using technologies like Node, Python,
            Django, Express, Rest APIs, Graphql APIs, Django Restful APIs.....
          </p>
        </div>
        <div className="card">
          <Android className="icon" />
          <h4>Mobile App/(UI/UX)</h4>
          <p>
            Full-stack development and design of Mobile Apps using React native,
            AWS services, Firebase, Figma, Adobe XD.....
          </p>
        </div>
      </div>
    </div>
  );
}
