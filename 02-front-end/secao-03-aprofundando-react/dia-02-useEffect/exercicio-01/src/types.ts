export type IssApiData = {
  name: string,
  id: number,
  latitude: number,
  longitude: number,
  altitude: number,
  velocity: number,
  visibility: string,
  footprint: number,
  timestamp: number,
  daynum: number,
  solar_lat: number,
  solar_lon: number,
  units: string
}

export type PosISSType = {
  latitude: number, 
  longitude: number 
}