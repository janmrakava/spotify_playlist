import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import ISongProps from '../../utils/Interface'
import Spotify from '../../util/Spotify'
//Web adress https://my_playlist.surge.sh/

interface IPlaylistAttributes{
  playlistTracks: ISongProps[],
  playlistName: string
 } 



function App() {


  useEffect(() => {
    Spotify.getAccesToken()
  })
 
  const [tracks, setTracks] = useState<Array<ISongProps>>([])

  const [playlistName, setPlaylistName] = useState<string>('Default')
  const [term, setTerm] = useState('')

  const [playlistTracks, setPlaylistTracks] = useState<Array<ISongProps>>([])
    
  const addTrack = (track: ISongProps) => {
    const found = playlistTracks.some(el => el.id === track.id)
    if (!found){
      setPlaylistTracks((prevPlaylist) => [
        ...prevPlaylist, track
      ])
    } else {
      console.log('Already here')
    }
  }

  const removeTrack = (track: ISongProps) => {   
    setPlaylistTracks(prevState => prevState.filter(x => x.id !== track.id))
  }

  const updatePlaylistName = (name: string) => {
    setPlaylistName(name)
    
  }
  
  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(playlistName, trackURIs)?.then(() => {
      setPlaylistName('New Playlist'),
      setPlaylistTracks([])
    })
  }

 const changeTerm = (newTerm: string) => {
    setTerm(newTerm)
 }

  const search = (searchTerm:string) => {

    Spotify.search(searchTerm).then(searchResults => {
      setTracks(searchResults)
    })
  
   }
  return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={search} onChange={changeTerm} term={term}/>
          <div className="App-playlist">
            <SearchResults tracks={tracks} onAdd={addTrack}/>
            <Playlist 
              playlistName={playlistName} 
              playlistTracks={playlistTracks} 
              onRemove={removeTrack} 
              onNameChange={updatePlaylistName}
              onSave={savePlaylist}  
            />
         
          </div>
        </div>
</div>
  )
}

export default App
