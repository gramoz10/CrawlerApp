import {useState} from 'react'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:4000/api"

const useAxios = () => {
    const [response, setResponse] = useState(undefined)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const fetchData = async(params) => {
        try {
            setLoading(true)
            const result = await axios.request(params)
            setResponse(result.data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return { response, error, loading, fetchData }
}

export default useAxios