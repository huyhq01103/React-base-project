export const baseURL = process.env.REACT_APP_API_URL;
export const CCBrowser = /Coc Coc|coccoc/i.test(navigator.vendor) || /coc_coc_browser/i.test(navigator.userAgent);
export const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
import LdIc from "src/assets/images/footer/ic_social_1.svg";
import FbIC from "src/assets/images/footer/ic_social_2.svg";
import InstaIC from "src/assets/images/footer/ic_social_3.svg";
import YtbIC from "src/assets/images/footer/ic_social_4.svg";
export const Social = [
  {
    src: LdIc,
    title: "linkedin",
    path: "https://www.linkedin.com/company/coccoc/"
  },
  {
    src: FbIC,
    title: "facebook",
    path: "https://www.facebook.com/coccoc.careers"
  },
  {
    src: InstaIC,
    title: "instagram",
    path: "https://www.instagram.com/humansofcoccoc/"
  },
  {
    src: YtbIC,
    title: "youtube",
    path: "https://www.youtube.com/channel/UC5amIwCMN2qhA68Yij1rC1A"
  }
];
export const Menu = [
  {
    id: 1,
    title: "Giới thiệu",
    path: "/#home-about",
    scroll: 'about',
  },
  {
    id: 2,
    title: "Hướng dẫn tích điểm",
    path: "/#home-getpoints",
    scroll: 'points',
  },
  {
    id: 3,
    title: "Câu hỏi thường gặp",
    path: "/#home-faq",
    scroll: 'faqs',
  }
];