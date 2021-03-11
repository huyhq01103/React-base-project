import React, { memo, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "src/api";

const About = () => {
  const history = useHistory();
  useEffect(() => {

  }, []);

  return (
    <div className="about">
      ABOUT PAGE
    </div>
  );
};

export default memo(About);