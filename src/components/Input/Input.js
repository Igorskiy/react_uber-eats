/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Input.scss';

const Input = ({
  iconUrl,
  value,
  onChange,
  type,
  placeholder,
  name,
  className,
  isSmall,
  label,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => setIsFocused(true), [setIsFocused]);
  const handleBlur = useCallback(() => setIsFocused(false), [setIsFocused]);
  const wrapperClass = cn(
    'control__wrapper', {
      'control__wrapper--focused': isFocused,
      [className]: !!className,
    }
  );
  const inputClass = cn(
    'control__input', {
      'control__input--small': isSmall,
    }
  );

  return (
    <label
      className="control"
    >
      {label && (
        <p className="control__label">
          {label}
        </p>
      )}
      <div className={wrapperClass}>
        {!!iconUrl && (
          <img
            src={iconUrl}
            alt={placeholder}
            className="control__icon"
          />
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={name}
          className={inputClass}
          placeholder={placeholder}
        />
      </div>
    </label>
  );
};

Input.propTypes = {
  iconUrl: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  isSmall: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
  iconUrl: '',
  type: '',
  className: '',
  value: undefined,
  isSmall: true,
};
export default Input;
