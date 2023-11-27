import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 35%;
  background-size: cover;
  margin: 10px;
`

export const PlaceImage = styled.img`
  width: 100%;
  height: 220px;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-family: 'Roboto';
  background-color: #fff;
  background-size: cover;
`
export const PlaceName = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: #475569;
  margin: 0;
  padding: 0;
`

export const PlaceDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #64748b;
`
