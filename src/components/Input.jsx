import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Table.module.css';

function Input({
  type,
  placeholder,
  onChange,
  dataTestId,
  value,
  id,
  labelContent,
  name,
}) {
  return (
    <label htmlFor={ id }>
      {labelContent}
      <input
        type={ type }
        placeholder={ placeholder }
        onChange={ onChange }
        data-testid={ dataTestId }
        value={ value }
        id={ id }
        name={ name }
        className={ styles.Input }
      />
    </label>
  );
}

Input.defaultProps = {
  placeholder: '',
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  id: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
