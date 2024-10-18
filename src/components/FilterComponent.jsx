import {React,useState} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function FilterComponent({ onFilterChange }) {
    const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());

    return (
        <div>
            <select onChange={(e) => onFilterChange('age', e.target.value)}>
                <option value="15-25">15-25</option>
                <option value=">25">25</option>
            </select>

            <select onChange={(e) => onFilterChange('gender', e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <DatePicker
  selected={startDate}
  onChange={(date) => setStartDate(date)}
/>
<DatePicker
  selected={endDate}
  onChange={(date) => setEndDate(date)}
/>

        </div>
    )
}

export default FilterComponent
