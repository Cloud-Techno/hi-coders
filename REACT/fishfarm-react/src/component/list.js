function List(props){
    return(
       <ul>{(props.index) + 1}
          <li>{props.fish.fishType}</li>
          <li>{props.fish.price}</li>
          <li>{props.fish.durationInDays}</li>
          <li>{props.fish.originCountry}</li>
          <li>{props.fish.season}</li>
          <li>{props.fish.stockVolumeInkg}</li>
          <li>{props.fish.saleLocations}</li>
       </ul>
    )
 }
 
 export default List;