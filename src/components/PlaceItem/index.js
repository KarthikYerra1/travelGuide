import {
  ListItem,
  PlaceImage,
  DetailsContainer,
  PlaceName,
  PlaceDescription,
} from './styledComponents'

const PlaceItem = props => {
  const {details} = props
  const {name, imageUrl, description} = details

  return (
    <ListItem>
      <PlaceImage alt={name} src={imageUrl} />
      <DetailsContainer>
        <PlaceName>{name}</PlaceName>
        <PlaceDescription>{description}</PlaceDescription>
      </DetailsContainer>
    </ListItem>
  )
}

export default PlaceItem
