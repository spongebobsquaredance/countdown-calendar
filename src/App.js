import React from 'react'
import DayList from './components/DayList'

const calendarDays = [
  {
    "id": 0,
    "day_index": 0,
    "day_has_started": true,
    "day_checked": false,
    "image_file_path": "https://via.placeholder.com/150",
    "image_alt_text": "Movie poster Edward Scissorhands",
    "product_url": "https://www.hulu.com/movie/edward-scissorhands-c71d11de-32df-4fb5-a0f1-06e1e0a0d5aa",
  },
  {
    "id": 1,
    "day_index": 1,
    "day_has_started": false,
    "day_checked": false,
    "image_file_path": "https://via.placeholder.com/150",
    "image_alt_text": "Movie poster Corpse Bride",
    "product_url": "https://www.amazon.com/Burtons-Corpse-Bride-Johnny-Depp/dp/B000GOWSF0",
  },
  {
    "id": 2,
    "day_index": 2,
    "day_has_started": false,
    "day_checked": false,
    "image_file_path": "https://via.placeholder.com/150",
    "image_alt_text": "Movie poster Corpse Bride",
    "product_url": "https://www.amazon.com/Casper-Christina-Ricci/dp/B000I9S5SC",
  }
]

export default function App() {
  return (
    <div className="calendar-wrapper">
      <DayList
        calendarDays={calendarDays}
      />
    </div>
  )
}
