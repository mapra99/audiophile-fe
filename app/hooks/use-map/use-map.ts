import { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'

import type { Map } from 'mapbox-gl'
import type { UseMapArgs } from './types'

const MAP_ZOOM_LEVEL = 17
const MAP_STYLES_URL = 'mapbox://styles/mapbox/streets-v12'

const useMap = ({ containerId, center, marker, mapboxToken }: UseMapArgs) => {
  const [map, setMap] = useState<Map | undefined>()

  useEffect(() => {
    if (!containerId || !center || !mapboxToken) return;
    if (map) return

    mapboxgl.accessToken = mapboxToken;
    const createdMap = new mapboxgl.Map({
      container: containerId,
      style: MAP_STYLES_URL,
      center,
      zoom: MAP_ZOOM_LEVEL
    });

    setMap(createdMap)
  }, [map, containerId, center, mapboxToken])

  useEffect(() => {
    if (!map) return;
    if (!marker) return;

    const { position } = marker

    new mapboxgl.Marker()
      .setLngLat(position)
      .addTo(map)

    setMap(map)
  }, [map, marker])

  return {
    map
  }
}

export default useMap
