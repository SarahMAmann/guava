import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    emphasis: PropTypes.string,
    paragraph: PropTypes.string
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3'])
}

const defaultProps = {
  children: null,
  tag: 'h2'
}

const MainSectionHeader = ({
  className,
  data,
  children,
  tag,
  ...props
}) => {

  const classes = classNames(
    'section-header',
    className
  );

  const Component = tag;

  return (
    <>
      {(data.title || data.paragraph) &&
        <div
          {...props}
          className={classes}
        >
          <div>
            {children}
            {data.title &&
              <Component className={
                classNames(
                  'mt-0',
                  data.paragraph ? 'mb-16' : 'mb-0'
                )}>{data.title}<span className="rainbow">{data.emphasis}</span></Component>
            }
            {data.paragraph &&
              <p className="m-0">{data.paragraph}</p>
            }
          </div>
        </div>
      }
    </>
  );
}

MainSectionHeader.propTypes = propTypes;
MainSectionHeader.defaultProps = defaultProps;

export default MainSectionHeader;