import axios from 'axios'

export const setSearchAction = (search) => {
    return dispatch => {
        if (search) {
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${search}&api_key=cf497544ba11cf26250c6b3c8251e64e&format=json`)
                .then(res => {
                    const artists = res.data.results.artistmatches.artist;
                    if (artists && artists.length) {
                        dispatch({type: 'START_SEARCH', payload: artists})
                    } else {
                        dispatch({type: 'END_SEARCH'})
                    }
                })
        } else {
            dispatch({type: 'END_SEARCH'})
        }

    }

}