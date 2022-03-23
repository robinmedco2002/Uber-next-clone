import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iaW5tZWRjbyIsImEiOiJjbDB4dmY2azgxajB4M2xtdXE2ZndwMnFvIn0.fZIlIdpz7U23SWuNbh5Abg';


const Map = (props) => {
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [77.2945831380129, 28.631347627949847],
        zoom: 5,
        });
        if(props.pickupCoordinates){
            addToMap(map, props.pickupCoordinates)
        }

        if(props.dropoffCoordinates){
            addToMap(map, props.dropoffCoordinates)
        }
         
        if(props.pickupCoordinates && props.dropoffCoordinates){
            map.fitBounds([
                props.pickupCoordinates,
                props.dropoffCoordinates
            ], {
                padding:60
            })
        }
        }, [props.pickupCoordinates, props.dropoffCoordinates]);

        const addToMap = (map, coordinates) => {
            const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
        }     

  return (
    <Wrapper id='map'> </Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
 flex-1 h-1/2
`