import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Tehran', label: 'Tehran' },
  { value: 'Qom', label: 'Qom' },
  { value: 'Markazi', label: 'Markazi' },
  { value: 'Qazvin', label: 'Qazvin' },
  { value: 'Mazandaran', label: 'Mazandaran' },
];

const DropDown = () =>{
  const [selectedOption, setSelectedOption] = useState(null);

  return (
      <Select style={{fontSize:'3rem'}}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
  );
};
export default DropDown;