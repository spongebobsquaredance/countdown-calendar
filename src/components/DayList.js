import React, { useState } from 'react';

const DayList = ({ calendarDays }) => {
  const [cal_days_array, setDayChecked] = useState(calendarDays);
  const dateObj = new Date()
  const calendarDayNumber = dateObj.getDate()

  const toggleView = (dataIndex) => {
    let dataIndexInt = parseInt(dataIndex, 10)

    // use javascript's array map functionality since that will not modify existing state, which react does not like, and it returns a new array. The process is to loop over the state's array and find the correct id. Update the done boolean. Then set state with the updated list
    // https://stackoverflow.com/questions/62918710/how-to-update-state-with-usestate-in-an-array-of-objects

    let updatedDaysArray = cal_days_array.map(item => {
      if (item.id === dataIndexInt) {
        return {...item, day_checked: !item.day_checked}
      }
      return item
    })

    setDayChecked(updatedDaysArray)
  }

  return (
    <ul>
      {calendarDays.map((calendarDay, index) => 
      <li 
        key={calendarDay.id.toString()}
        onClick={index <= calendarDayNumber ? (e) => toggleView(e.target.getAttribute("data-index")) : undefined}
      >
        <h2 data-index={index}>Day {index}</h2>
        {cal_days_array[calendarDay.id].day_checked &&
        <>
          <img 
            src={calendarDay.image_file_path} 
            alt={calendarDay.image_alt_text}
          />
          <a href={calendarDay.product_url}>{calendarDay.product_name}</a>
        </>}
      </li>)}
    </ul>
  )
}

export default DayList