

let accessToken: string

const clientID = 'a28f8c0f78824d1caebd123f4e53d5d0'
const redirectURI = 'http://localhost:5173/'

const Spotify = {
    getAccesToken(){
        if (accessToken){
            return accessToken
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)
        if (accessTokenMatch && expiresInMatch){
            accessToken = accessTokenMatch[1]
            const expiresIn = Number(expiresInMatch[1])

            window.setTimeout(() => accessToken='', expiresIn * 1000)
            window.history.pushState('Access Token', '', '/');
            return accessToken
        } else {
            const accessURL =` https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`           
            window.location.href = accessURL
        } 
    },
    search(term: string){
        const accessToken = Spotify.getAccesToken()
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, 
        {
            headers: {Authorization: `Bearer ${accessToken}`}
        }
        ).then(response => response.json()
        ).then(responseJSON => {
            if (!responseJSON.tracks){
                return []
            } else {
                return responseJSON.tracks.items.map((track: { id: number; name: string; artist: { name: string }[]; album: { name: string }; uri: string }) => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artist[0].name,
                    album: track.album.name,
                    URI: track.uri
                })        
                )
            }
        })

    }

}
export default Spotify