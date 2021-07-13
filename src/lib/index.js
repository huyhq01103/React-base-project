import {
  Link as RRLink,
  NavLink as RRNavLink,
  Redirect as RRRedirect,
} from 'react-router-dom';

import withLocale from './withLocale';

const Link = withLocale(RRLink);
const NavLink = withLocale(RRNavLink);
const Redirect = withLocale(RRRedirect);

export {
  Link,
  NavLink,
  Redirect,
};
