import React, { useState } from 'react'
import styled from 'styled-components'

import ListItem from './ListItem'

const ListWrapper = styled.ul`
  display: grid;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  margin: 0;
  padding: 0;
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-column-gap: 2%;
    grid-row-gap: 2%;
    grid-template-columns: repeat(6, 1fr);
  }
`

const DayList = ({ calendarDays }) => {
  const [cal_days_array, setDayChecked] = useState(calendarDays);
  const dateObj = new Date()
  const calendarDayNumber = dateObj.getDate()

  const toggleView = (dataIndex) => {
    let dataIndexInt = parseInt(dataIndex, 10)

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
        <ListItem 
          dayChecked={cal_days_array[calendarDay.id].day_checked}
          dayIndex={calendarDay.day_index}
          dataIndex={calendarDay.day_index}
          imgAltText={calendarDay.image_alt_text}
          imgFilePath={calendarDay.image_file_path}
          key={calendarDay.id.toString()}
          onClick={calendarDay.day_index <= calendarDayNumber ? (e) => toggleView(e.target.getAttribute("data-index")) : undefined}
          productName={calendarDay.product_name}
          productUrl={calendarDay.product_url}
        />
        )
      }
    </ListWrapper>
  )
}

export default DayList