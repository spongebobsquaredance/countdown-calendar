import styled from 'styled-components'

const ContentContainer = styled.li`
  height: 200px;
  overflow: hidden;
  position: relative;
`

const ContentCover = styled.div`
  align-items: center;
  background: #254649;
  color: #e5cda7;
  display: flex;
  font-family: 'Cinzel', serif;
  font-size: 72px;
  height: 100%;
  justify-content: center;
  transform: ${props => props.isOpen ? "translateX(-75%)" : "translateX(0)"};
  transition: transform 2s;
  width: 100%;
`

const Content = styled.div`
  background: #e5cda7;
  height: 100%;
  position: absolute;
  text-align: center;
  width: 100%;
  a {
    display: block;
    height: 100%;
    text-decoration: none;
  }
  img {
    margin-top: 12px;
    max-width: 80%;
  }
  p {
    color: #254649;
    font-family: sans-serif;
    font-weight: bold;
    margin: 6px 0 0;
  }
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