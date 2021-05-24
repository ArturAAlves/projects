import axios from "axios"

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    try {
        const urlValidation = () => {
            return country !== "Global" ? `${url}/countries/${country}` : url
        }
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(urlValidation())
        return { confirmed, recovered, deaths, lastUpdate }

    } catch (error) {
    }
}

export const fetchDailyData = async () => {
    try {
        return await axios.get(`${url}/daily`)
    } catch (error) {
    }
}

export const fetchedCountryData = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)
        return countries.map(data => (data.name))
    } catch (error) {
    }
}


