import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Tehran', label: 'Tehran' },
  { value: 'Markazi', label: 'Markazi' },
  { value: 'Qazvin', label: 'Qazvin' },
  { value: 'Mazandaran', label: 'Mazandaran' },
];

const subOption = [
  {id:"Tehran" , city:["Tehran" , "Ghods", "Shahriar" , "Islam City" , "Mallard"]},
  {id:"Markazi" , city:["Arak" , "Saveh", "Khomein" , "Mahallat" , "Tafresh"]},
  {id:"Qazvin" , city:["Qazvin" , "Iqbaliyeh", "Shawl" , "Sharifieh" , "Abeek"]},
  {id:"Mazandaran" , city:["Babol" , "Sari", "Chalous" , "Amol" , "Neka"]}
]

const DropDown = ({selectedOption , setSelectedOption , options}) =>{
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