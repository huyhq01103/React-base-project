/**
 * @param {Location} location React router location object
 */
export function getQueryParams(location) {
	let result = {};
	let query = location.search;
	if (query) {
		query = query.substring(1, query.length);
		query.split("&").forEach((item) => {
			if (item.indexOf("=")) {
				let pair = item.split("=");
				result[pair[0]] = decodeURIComponent(pair[1]);
			}
		});
	}
	return result;
}

/**
 * @param {Location} location React router location object
 * @param queryParams New query parameters
 */
export function generatePath(location, queryParams) {
	let currentQueryParams = getQueryParams(location);
	let newQueryParams = {
		...currentQueryParams,
		...queryParams,
	};
	let queryString = Object.keys(newQueryParams)
		.filter((key) => newQueryParams[key])
		.map((key) => {
			return `${key}=${encodeURIComponent(newQueryParams[key])}`;
		})
		.join("&");
	let path = location.pathname + "?" + queryString;
	return path;
}

export function htmlDecode(input) {
	var doc = new DOMParser().parseFromString(input, "text/html");
	return doc.documentElement.textContent;
}

export const timeFormat = (time) => {
	if (time) {
		let date = time.slice(0, 10);
		let nDate =
			date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
		return nDate;
	}
};

export const stripLocale = (pathname, locale) => {
	if (!locale) {
		return pathname;
	}

	return pathname.replace(`/${locale}`, "");
};

export const updateWidth = () => {
	setWidth(window.innerWidth);
};



/**
 * Convert string phone number to Link
 * Eg: "(+84) 932 761 669" -> {content: "(+84) 932 761 669", link: "tel:+84932761669"}
 *
 * @param {string} phone number
 * @return {Object} tel link
 */

export const formatPhone = (phones = "") => {
	let phoneSplit = phones.split("-");
	let phoneData = [];
	phoneSplit.map((phone) =>
		phoneData.push({
			content: phone.trim(),
			link: "tel:" + phone.match(/(\+\d+)|\d+/g)?.join(""),
		})
	);
	return phoneData;
};
