
import "./Playlist.css"
import TrackList from "../TrackList/TrackList"
import ISongProps from "../../utils/Interface"

interface IPlaylistAttributes{
    playlistTracks: ISongProps[],
    playlistName: string,
    onRemove?(track: ISongProps): void,
    onNameChange(name: string): void,
    onSave(): void    
} 

function Playlist(props: IPlaylistAttributes){
    const {playlistName, playlistTracks, onRemove, onNameChange, onSave} = props

    const handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        onNameChange(event.currentTarget.value)
    }
    
   
    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
            <TrackList tracks={playlistTracks} isRemoval={true} onRemove={onRemove}/> 
            <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist