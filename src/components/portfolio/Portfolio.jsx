import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "mern",
      title: "MERN Stack",
    },
    {
      id: "django",
      title: "Django",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Front-End(React)",
    },
    {
      id: "uiux",
      title: "UI/UX",
    },
    {
      id: "api",
      title: "APIs",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <a href="http://www.goal.com">
              <img src="images/6.jpg" alt="" />
            </a>
            <div className="detail">
              <a href="http://www.goal.com">
                <h3>React</h3>
              </a>
            </div>
            <div className="details">
              <a href="http://www.goal.com">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </a>
              <a href="" class="buton">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
