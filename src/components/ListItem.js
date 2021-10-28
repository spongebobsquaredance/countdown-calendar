import styled from 'styled-components'

const DayNumber = styled.h2`
  font-family: 'Cinzel', serif;
  color: ${props => props.isOpen ? "orange" : "black"};
`

const ListItem = ({ 
  dayChecked, 
  dayIndex, 
  dataIndex, 
  imgAltText, 
  imgFilePath, 
  onClick, 
  productName, 
  productUrl }) => {
    return (
      <li onClick={onClick}>
        <div>
          <DayNumber 
            data-index={dataIndex}
            isOpen={dayChecked}
          >Day {dayIndex}</DayNumber>
        </div>
        {dayChecked && 
          <div>
            <a href={productUrl}>
              <img src={imgFilePath} alt={imgAltText} />
              <p>{productName}</p>
            </a>
          </div>
        }
      </li>
    )
}

export default ListItem