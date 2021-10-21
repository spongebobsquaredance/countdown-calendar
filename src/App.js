import React from 'react'
import { calendarDays } from './sample-data'
import DayList from './components/DayList'

export default function App() {
  return (
    <div className="calendar-wrapper">
      <DayList
        calendarDays={calendarDays}
      />
    </div>
  )
}
