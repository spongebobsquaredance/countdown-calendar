import React, { useState } from 'react'
import styled from 'styled-components'

const ListWrapper = styled.ul`
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  margin: 0;
  padding: 0;
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-column-gap: 2%;
    grid-template-columns: repeat(6, 1fr);
  }
`

const DayList = ({ calendarDays }) => {
  const [cal_days_array, setDayChecked] = useState(calendarDays);
  const dateObj = new Date()
  const calendarDayNumber = dateObj.getDate()

  const toggleView = (dataIndex) => {
    let dataIndexInt = parseInt(dataIndex, 10)

    // use javascript's array map functionality since that will not modify existing state, which react does not like, and it returns a new array. The process is to loop over the state's array and find the correct id. Update the done boolean. Then set state with the updated list
    // https://stackoverflow.com/questions/62918710/how-to-update-state-with-usestate-in-an-array-of-objects

    let updatedDaysArray = cal_days_array.map(item => {
      if (item.id === (dataIndexInt - 1)) {
        return {...item, day_checked: !item.day_checked}
      }
      return item
    })

    setDayChecked(updatedDaysArray)
  }

  return (
    <ListWrapper>
      {calendarDays.map((calendarDay) => 
      <li 
        key={calendarDay.id.toString()}
        onClick={calendarDay.day_index <= calendarDayNumber ? (e) => toggleView(e.target.getAttribute("data-index")) : undefined}
      >
        <h2 data-index={calendarDay.day_index}>Day {calendarDay.day_index}</h2>
        {cal_days_array[calendarDay.id].day_checked &&
        <>
          <img 
            src={calendarDay.image_file_path} 
            alt={calendarDay.image_alt_text}
          />
          <a href={calendarDay.product_url}>{calendarDay.product_name}</a>
        </>}
      </li>)}
    </ListWrapper>
  )
}

export default DayList