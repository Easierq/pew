import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  mernPortfolio,
  djangoPortfolio,
  mobilePortfolio,
  frontendPortfolio,
  uiuxPortfolio,
  apiPortfolio,
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
      id: "frontend",
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
      case "mern":
        setData(mernPortfolio);
        break;
      case "django":
        setData(djangoPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "frontend":
        setData(frontendPortfolio);
        break;
      case "uiux":
        setData(uiuxPortfolio);
        break;
      case "api":
        setData(apiPortfolio);
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
            <a href={d.link}>
              <img src={d.img} alt={d.title} />
            </a>
            <div className="detail">
              <a href={d.link}>
                <h3>{d.title}</h3>
              </a>
            </div>
            <div className="details">
              <a href={d.link}>
                <p>{d.desc}</p>
              </a>
              <a href={d.link} class="buton">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
