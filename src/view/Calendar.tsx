import React, { useState } from 'react';
import { RangePicker, DatePicker } from '@alexeika/date-picker-library'
import '../assets/container.css'

const Calendar: React.FC = () => {
    const [simpleDate, setSimpleDate] = useState('')
    const [rangeDate, setRangeDate] = useState('')
    return (
        <div className='container'>
            <DatePicker
                value={simpleDate}
                onChange={(date: string) => {setSimpleDate(date)}}
            />

            {simpleDate}

            <RangePicker
                onChange={(date: string) => {setRangeDate(date)}}
            />
            {rangeDate}
        </div>
    );
}

export default Calendar;
