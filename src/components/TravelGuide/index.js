import {Component} from 'react'

import Loader from 'react-loader-spinner'

import PlaceItem from '../PlaceItem'

import {
  AppContainer,
  HeadingContainer,
  AppHeading,
  LoaderContainer,
  PlacesListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class TravelGuide extends Component {
  state = {
    placesList: [],
    apiStatus: apiStatusConstants.inital,
  }

  componentDidMount() {
    this.getPlaces()
  }

  showLoader = () => (
    <LoaderContainer>
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    </LoaderContainer>
  )

  getPlaces = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const formattedData = data.packages.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.image_url,
      description: each.description,
    }))

    this.setState({
      placesList: formattedData,
      apiStatus: apiStatusConstants.success,
    })
  }

  showPlaces = () => {
    const {placesList} = this.state

    return (
      <PlacesListContainer>
        {placesList.map(each => (
          <PlaceItem key={each.id} details={each} />
        ))}
      </PlacesListContainer>
    )
  }

  getInfo = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.showPlaces()
      case apiStatusConstants.inProgress:
        return this.showLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <AppContainer>
        <HeadingContainer>
          <AppHeading>Travel Guide</AppHeading>
        </HeadingContainer>
        {this.getInfo()}
      </AppContainer>
    )
  }
}

export default TravelGuide
