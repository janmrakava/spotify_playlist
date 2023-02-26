import "./TrackList.css"
import ISongProps from "../../utils/Interface"

import Track from "../Track/Track"




function TrackList({tracks}: {tracks: ISongProps[]}){
   
    




    return(
        <div className="TrackList">
            {/*You will add a map method that renders a set of Track components  -->*/}
            {
              tracks.map(track => {
                return <Track track={track}
                                key={track.id} />
              })
                               
                 
            }
          
        </div>
    )
}

export default TrackList