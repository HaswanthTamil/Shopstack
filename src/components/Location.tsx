import useUserCity from "../lib/useUserCity"

const Location = () => {
  const city = useUserCity()
  return (
    <div className="flex items-center">
      <span className="text-sm sm:text-lg">📍{city}</span>
    </div>
  )
}

export default Location
