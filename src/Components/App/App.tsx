import { useState } from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import ISongProps from '../../utils/Interface'

function App() {
  
  const [songProps, setSongProps] = useState<ISongProps[]>([
   {
    name: "name1",
    artist: "artist1",
    album: "album1",
    id: 1
   },
   {
    name: "name2",
    artist: "artist2",
    album: "album2",
    id: 2
   },
   {
    name: "name3",
    artist: "artist3",
    album: "album3",
    id: 3
   },
  ]);


  return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults songProps={...songProps}/>
            <Playlist />
         
          </div>
        </div>
</div>
  )
}

export default App