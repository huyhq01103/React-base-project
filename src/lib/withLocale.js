import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

const withLocale = (WrappedComponent) => {
  const NewComponent = ({
    to,
    match,
    history,
    location,
    ignoreLocale,
    staticContext,
    ...rest
  }) => {
    const { params } = match;
    if (ignoreLocale) {
      return (
        <WrappedComponent
          to={to}
          {...rest}
        />
      );
    }

    let path = to;

    if (params && params.locale) {
      path = path[0] === '/'
        ? `/${params.locale}${path}`
        : `${params.locale}/${path}`;
    }

    return (
      <WrappedComponent
        to={path}
        {...rest}
      />
    );
  };

  NewComponent.propTypes = {
    to: PropTypes.string.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        locale: PropTypes.string,
      }),
    }).isRequired,
    ignoreLocale: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    staticContext: PropTypes.object,
    // eslint-disable-next-line react/forbid-prop-types
    history: PropTypes.object,
    // eslint-disable-next-line react/forbid-prop-types
    location: PropTypes.object,
  };

  NewComponent.defaultProps = {
    ignoreLocale: false,
    staticContext: undefined,
    history: undefined,
    location: undefined,
  };

  return withRouter(NewComponent);
};

export default withLocale;
