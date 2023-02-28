
import "./Playlist.css"
import TrackList from "../TrackList/TrackList"
import ISongProps from "../../utils/Interface"

interface IPlaylistAttributes{
    playlistTracks: ISongProps[],
    playlistName: string,
    onRemove: (track: ISongProps) => void,
    
} 

function Playlist(props: IPlaylistAttributes){
    const {playlistName, playlistTracks, onRemove} = props
    
   
    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"}/>
            <TrackList tracks={playlistTracks} isRemoval={true} onRemove={onRemove}/> 
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist