import ISongProps from "../../utils/Interface"
import "./Track.css"

interface SearchResultsProps {
    track: {
        name: string,
        album: string, 
        artist: string,
        id: number,
        uri: string
    },
    onAdd?(track: ISongProps): void,
    onRemove?(track: ISongProps): void,
    isRemoval: boolean
  }


function Track(props: SearchResultsProps){
    const {track, onAdd, isRemoval, onRemove} = props

    const addTrack = (track: ISongProps) => {
        onAdd?.(track)
    }
    const removeTrack = (track: ISongProps) => {
        onRemove?.(track)
    }
    
    

    const renderAction = () => {
        if (isRemoval){
            return <button className="Track-action" onClick={() => removeTrack(track)}>-</button>
        } else {
            return <button className="Track-action" onClick={()=> addTrack(track)}>+</button>
        }
    }

    return (
        <div className="Track"> 
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            {renderAction()}
        </div>
    )
}

export default Track