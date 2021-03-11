import React, { memo, useRef, useEffect, useState, useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "src/components/common/button";
import {CCBrowser ,about_block, points_block, faqs_block } from "src/constants";
import API from "src/api";

const Home = () => {
  let about = useRef(null),
    points = useRef(null),
    faqs = useRef(null);
  const history = useHistory();

  useEffect(() => {
    let options = {
      root: null,
      threshold: 0.8,
    };
    const scrollListener = (entries) => {
      const items = document.querySelectorAll(".navbar-item");
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          items.forEach((item) => {
            if (item["name"] === entry.target.attributes.name.value) {
              item.classList.add("active");
            } else {
              item.classList.remove("active");
            }
          });
        }
      });
    };
    let observer = new IntersectionObserver(scrollListener, options);
    observer.observe(points.current);
    observer.observe(faqs.current);
    observer.observe(about.current);

  }, [history]);

  

  return (
    <div className="home-page">
      <section id="home-about" ref={about} name={"about"}>
        abc
      </section>
      <section
        id="home-getpoints"
        className="py-60"
        ref={points}
        name={"points"}
      >
        xyz
      </section>
      <section id="home-faq" ref={faqs} name={"faqs"}>
      123
      </section>
    </div>
  );
};

export default memo(Home);