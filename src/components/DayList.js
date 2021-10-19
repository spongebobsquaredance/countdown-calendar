const DayList = ({ calendarDays }) => {
  return (
    <ul>
      {calendarDays.map((calendarDay, index) => 
      <li key={calendarDay.id.toString()}>
        <h2>{index}</h2>
          <img 
          src={calendarDay.image_file_path} 
          alt={calendarDay.image_alt_text} />
          <a href={calendarDay.product_url}>{calendarDay.product_name}</a>
      </li>)}
    </ul>
  )
}

export default DayList