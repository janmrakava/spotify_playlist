
import "./Playlist.css"
import TrackList from "../TrackList/TrackList"
import ISongProps from "../../utils/Interface"

interface IPlaylistAttributes{
    playlistTracks: ISongProps[],
    playlistName: string
} 

function Playlist(props: IPlaylistAttributes){
    const {playlistName, playlistTracks} = props
    
   
    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"}/>
            <TrackList tracks={playlistTracks}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist