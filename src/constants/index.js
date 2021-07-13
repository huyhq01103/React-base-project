export const baseURL = process.env.REACT_APP_API_URL;
export const CCBrowser =
	/Coc Coc|coccoc/i.test(navigator.vendor) ||
	/coc_coc_browser/i.test(navigator.userAgent);
export const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
	navigator.userAgent
);
import FbIC from "@images/footer/ic_fb_white.svg";
import YtbIC from "@images/footer/ic_ytb_white.svg";
export const FooterSocial = [
	{
		src: FbIC,
		title: "facebook",
		path: "https://www.facebook.com/CocCocTrinhDuyet/",
	},
	{
		src: YtbIC,
		title: "youtube",
		path: "https://www.youtube.com/user/CocCocCom",
	},
];

export const regPhoneNumber = /((09|03|07|08|05)+([0-9]{8})\b)/;
