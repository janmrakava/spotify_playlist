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

  const [playlistTracks, setPlaylistTracks] = useState<Array<ISongProps>>([
    {name: "playlistName1", artist: "playlistArtist1", album:"playlistAlbum1", id: 4},
    {name: "playlistName2", artist: "playlistArtist2", album:"playlistAlbum2", id: 5},
    {name: "playlistName3", artist: "playlistArtist3", album:"playlistAlbum3", id: 6} 
  ])
    
  const addTrack = (track: ISongProps) => {
    const found = playlistTracks.some(el => el.id === track.id)
    if (!found){
      playlistTracks.push(track)
    } else {
      console.log('Already here')
    }
  }
  
  
  



  return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults tracks={tracks} onAdd={addTrack}/>
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
         
          </div>
        </div>
</div>
  )
}

export default App
