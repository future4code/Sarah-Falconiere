import axios from "axios"

const getTrips = () => {
    axios.get(`${url}/trips`)
    .then((res) => {
        console.log(res)
        setTripsList(res.data.trips)
        console.log(tripsList)
        tripsToExport = tripsList
        console.log(tripsToExport)
    })
    .catch((err) => {
        console.log(err.statusText)
    })
}

export default