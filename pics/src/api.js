import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID DxwgEZZYA13tFtmbj_9JPJIAi8wn__l4UMiXvBnl5PU'
        },
        params: {
            query: term
        }
    })

    return response.data.results
}

export default searchImages