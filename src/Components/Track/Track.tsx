import ISongProps from "../../utils/Interface"
import "./Track.css"


function Track({track}: {track: ISongProps}){
    
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
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
        </div>
    )
}

export default Track