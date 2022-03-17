import React from 'react'
import { MapContainer } from 'react-leaflet';

const Map = () => {
  return  window ? 
            <MapContainer /> :
            null;
}

export default Map;
