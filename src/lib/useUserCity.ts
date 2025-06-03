import { useEffect, useState } from "react"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useUserCity = () => {
  const [city, setCity] = useState<string>("")

  const getUserCoords = () => {
    return new Promise<GeolocationPosition>((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("Geolocation not supported")
      }
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
  }

  const getCityFromCoords = async (lat: number, lon: number) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    )
    const data = await res.json()
    return (
      data.address.city ||
      data.address.town ||
      data.address.village ||
      "Unknown"
    )
  }

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const pos = await getUserCoords()
        const cityName = await getCityFromCoords(
          pos.coords.latitude,
          pos.coords.longitude
        )
        setCity(cityName)
      } catch (err) {
        console.error("Location error:", err)
        setCity("Unknown")
      }
    }

    fetchCity()
  }, [])

  return city
}

export default useUserCity
