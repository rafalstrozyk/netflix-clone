import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as ChevronRightIcon } from 'assets/icons/chevron-thin-right.svg';

const StyledHeader = styled.h2`
  line-height: 1.3;
  margin: 0;

  .title-link {
    margin-left: 60px;
    font-size: 1.4vw;
    color: #e5e5e5;
    font-weight: 700;
    margin: 0 4% 0.5em 4%;
    text-decoration: none;
    display: inline-block;
    min-width: 6em;

    :hover .see-all-link {
      max-width: 100%;
      opacity: 1;
      transform: translateX(0);
    }
    :hover .icon {
      max-width: 100%;
      opacity: 1;
      transform: translateX(165px);
    }
  }

  .title {
    display: table-cell;
    vertical-align: bottom;
    line-height: 1.25vw;
    font-size: 1.4vw;
  }

  .arrow-header {
    display: table-cell;
    vertical-align: bottom;
  }

  .see-all-link {
    display: inline-block;
    font-size: 0.9vw;
    margin-right: 4px;
    max-width: 0;
    line-height: 0.8vw;
    transform: translateX(-20px);
    -webkit-transition: max-width 1s, opacity 1s, -webkit-transform 750ms;
    transition: max-width 1s, opacity 1s, -webkit-transform 750ms;
    -o-transition: max-width 1s, opacity 1s, -o-transform 750ms;
    -moz-transition: max-width 1s, opacity 1s, transform 750ms, -moz-transform 750ms;
    transition: max-width 1s, opacity 1s, transform 750ms;
    transition: max-width 1s, opacity 1s, transform 750ms, -webkit-transform 750ms,
      -moz-transform 750ms, -o-transform 750ms;
    white-space: nowrap;
    vertical-align: bottom;
    cursor: pointer;
    opacity: 0;
  }

  .icon {
    opacity: 0;
    display: inline-block;
    -webkit-transition: -webkit-transform 750ms;
    transition: -webkit-transform 750ms;
    -o-transition: -o-transform 750ms;
    -moz-transition: transform 750ms, -moz-transform 750ms;
    transition: transform 750ms;
    transition: transform 750ms, -webkit-transform 750ms, -moz-transform 750ms, -o-transform 750ms;
    vertical-align: bottom;
    line-height: 1;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    transform: translateZ(0);

    svg {
      fill: #fff;
      width: 15px;
      height: 15px;
      vertical-align: bottom;
      margin-bottom: -2px;
    }
  }
`;

const RowHeader = ({ children, href }) => (
  <StyledHeader>
    <a className="title-link" href={href}>
      <div className="title">{children}</div>
      <div className="arrow-header">
        <div className="icon">
          <ChevronRightIcon />
        </div>
        <div className="see-all-link">Przeglądaj Wszystko</div>
      </div>
    </a>
  </StyledHeader>
);

RowHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  href: PropTypes.string.isRequired,
};

export default RowHeader;
