import dynamic from 'next/dynamic';
import React, {useEffect, useState} from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Map: React.FC = () => {
  return <MapContainer className='w-100' center={[51.505, -0.09]} zoom={20}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
</MapContainer>
}

export default Map;
