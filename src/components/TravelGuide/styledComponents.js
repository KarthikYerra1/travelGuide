import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 40px;
  background-color: #eef4f7;
  background-size: cover;
  min-height: 100vh;
`

export const HeadingContainer = styled.div`
  background-size: cover;
  padding: 8px;
  border-color: #52bbf0;
  border-style: solid;
  border-width: 0px 0px 3px 0px;
  margin-bottom: 20px;
`

export const AppHeading = styled.h1`
  font-family: 'Roboto';
  color: #334155;
  font-weight: 600;
  text-align: center;
  margin: 0px;
  padding: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
`
export const PlacesListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`
