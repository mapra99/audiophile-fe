import type { LngLatLike } from 'mapbox-gl'

export interface MarkerArgs {
  position: LngLatLike
}

export interface UseMapArgs {
  containerId: string
  mapboxToken: string
  center?: LngLatLike
  marker?: MarkerArgs
}
