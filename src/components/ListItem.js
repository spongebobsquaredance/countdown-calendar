import styled from 'styled-components'

const ContentContainer = styled.li`
  overflow: hidden;
  position: relative;
`

const ContentCover = styled.div`
  background: #254649;
  font-family: 'Cinzel', serif;
  font-size: 48px;
  color: #e5cda7;
  min-height: 200px;
  top: 0;
  width: 100%;
  transition: transform 2s;
  transform: ${props => props.isOpen ? "translateX(-75%)" : "translateX(0)"};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  background: black;
  position: absolute;
  width: 100%;
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
      <ContentContainer>
        {dayChecked && 
          <Content>
            <a href={productUrl}>
              <img src={imgFilePath} alt={imgAltText} />
              <p>{productName}</p>
            </a>
          </Content>
        }
        <ContentCover 
          onClick={onClick} 
          data-index={dataIndex}
          isOpen={dayChecked}
        >{dayIndex}</ContentCover>
      </ContentContainer>
    )
}

export default ListItem