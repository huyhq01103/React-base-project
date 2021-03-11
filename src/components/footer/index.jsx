import React, { memo } from "react";
import { Link } from "react-router-dom";
// import LogoFooter from "src/assets/images/logo_coccoc_points_light.svg";
import { Social } from "src/constants";
const Footer = () => {
  const Footermenu = () => {
    return (
      <ul className="footer-menu">
        <li>
          <Link to={"/"}>Điều khoản sử dụng</Link>
        </li>
        <li>
          <Link to={"/"}>Chính sách bảo mật</Link>
        </li>
      </ul>
    )
  }
  return (
    <div id="js-footer" className="footer">
      <div className="container">
        <div className="">
          <div className="section-content">
            <div className="content-footer clearfix">
              <div className="row">
                <div className="col-sm-7">
                  {/* <img src={LogoFooter} alt="cốc cốc" /> */}
                </div>
                <div className="col-sm-12 show-mb">
                  <Footermenu />
                </div>
                <div className="col-sm-5">
                  <div className="social">
                    {Social.map((item, index) => (
                      <a
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.path}
                      >
                        <img src={item.src} alt={item.title} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-footer clearfix">
              <div className="row">
                <div className="col-sm-6">
                  © 2020 Toàn bộ bản quyền thuộc về Cốc Cốc
                </div>
                <div className="col-sm-6 hide-xs">
                  <Footermenu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
