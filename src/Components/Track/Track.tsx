import ISongProps from "../../utils/Interface"
import "./Track.css"


function Track({track}: {track: ISongProps}){
    const {name, artist, album} = track
    
    const renderAction = () => {
        if (track.isRemoval){
            return <button className="Track-action">-</button>
        } else {
            return <button className="Track-action">+</button>
        }
    }

    return (
        <div className="Track"> 
            <div className="Track-information">
                <h3>{name}</h3>
                <p>{artist} | {album}</p>
            </div>
        </div>
    )
}

export default Track