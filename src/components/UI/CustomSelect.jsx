import React, { useState, useRef, useEffect } from "react";
import styles from "./CustomSelect.module.scss";
import PropTypes from "prop-types";
import arrowUp from "../../assets/icons/tools-icons/arrowUp.png";
import arrowDown from "../../assets/icons/tools-icons/arrowDown.png";

const CustomSelect = ({ placeholder, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openUpwards, setOpenUpwards] = useState(false);
  const containerRef = useRef(null);
  const optionsRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const optionsRect = optionsRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - containerRect.bottom;
      const spaceAbove = containerRect.top;

      if (spaceBelow < optionsRect.height && spaceAbove > optionsRect.height) {
        setOpenUpwards(true);
      } else {
        setOpenUpwards(false);
      }
    }
  }, [isOpen]);

  const handleSelect = (option) => {
    console.log(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.selectContainer} ref={containerRef}>
      <div className={styles.selectHeader} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.selectPlaceholder}>
          {value ? value : placeholder}
        </div>
        {isOpen ? (
          <img
            src={arrowUp}
            alt="arrow-up"
            className={styles.arrowIcon}
          />
        ) : (
          <img
            src={arrowDown}
            alt="arrow-down"
            className={styles.arrowIcon}
          />
        )}
      </div>
      {isOpen && (
        <div
          className={`${styles.selectOptions} ${
            openUpwards ? styles.openUpwards : ""
          }`}
          ref={optionsRef}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className={styles.selectOption}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};



CustomSelect.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func,
};

CustomSelect.defaultProps = {
  placeholder: "",
  options: [],
  value: "",
  onChange: () => {},
};

export default CustomSelect;

// import React from 'react';
// import { Select, Space } from 'antd';
// import './CustomSelect.scss';

// const CustomSelect = ({ placeholder, options, value, onChange }) => {
//   const formattedOptions = options.map((option) => ({
//     label: option,
//     value: option.toLowerCase().replace(/\s+/g, '_'),
//   }));

//   return (
//     <div className="selectContainer">
//     <Select
//       mode="multiple"
//       style={{ width: '100%' }}
//       placeholder={placeholder}
//       defaultValue={value}
//       onChange={onChange}
//       options={formattedOptions}
//       className="customAntSelect"
//       dropdownClassName="customAntDropdown"
//       optionRender={(option) => (
//         <Space>
//           <span>{option.data.label}</span>
//         </Space>
//       )}
//     />
//   </div>
//   );
// };

// export default CustomSelect;
