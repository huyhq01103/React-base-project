import React, { memo, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import API from "src/api";

const About = () => {
  const history = useHistory();
  const [news, setNews] = useState({})
  const [isLoaded, setLoaded] = useState(null)
  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    const data = await API.get("/news");
    setNews(data);
    setLoaded(true);
  };

  const NewsItem = ({data, className}) => {
    return (
      <div className={className}>
        <div className="card">
          <img src={data.image_url} alt="data.title"/>
          <div className="card-type">{data.type}</div>
          <h3 className="card-title">{data.title}</h3>
        </div>
      </div>
    )
  }
  if(!isLoaded) {
    return "LOADING..."
  }else {
    return (
      <section className="news">
        <div className="container">
          <div className="row">
            {news?.data.map((item, index) => (
              <NewsItem data={item} key={index} className={index === 0 || index === 1 ? 'col-md-6' : 'col-md-4'}/>
            ))}
          </div>
          
        </div>
      </section>
    );
  }
  
};

export default memo(About);