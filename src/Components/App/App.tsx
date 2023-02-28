import { useState } from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import ISongProps from '../../utils/Interface'

interface IPlaylistAttributes{
  playlistTracks: ISongProps[],
  playlistName: string
 } 



function App() {

 
  const [tracks, setTracks] = useState<Array<ISongProps>>([
    {name: "name1", artist: "artist1", album:"album1", id: 1},
    {name: "name2", artist: "artist2", album:"album2", id: 2},
    {name: "name3", artist: "artist3", album:"album3", id: 3} 
  ])

  const [playlistName, setPlaylistName] = useState<string>('Default')
  const [term, setTerm] = useState('')

  const [playlistTracks, setPlaylistTracks] = useState<Array<ISongProps>>([
    {name: "playlistName1", artist: "playlistArtist1", album:"playlistAlbum1", id: 4}
  ])
    
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
    console.log(playlistName)
  }
  
  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri)
  }

 const changeTerm = (newTerm: string) => {
    setTerm(newTerm)
 }

  const search = (searchTerm:string) => {
    console.log(searchTerm)

  }
  return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={search} onChange={changeTerm}/>
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
