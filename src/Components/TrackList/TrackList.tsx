import "./TrackList.css"
import ISongProps from "../../utils/Interface"

import Track from "../Track/Track"

interface SearchResultsProps {
  tracks: ISongProps[],
  onAdd?(track: ISongProps): void,
  onRemove?(track: ISongProps): void, 
  isRemoval: boolean
}



function TrackList(props: SearchResultsProps){

  const {tracks, onAdd, onRemove, isRemoval} = props


  /*onAdd({name: "playlistName4", artist: "playlistArtist4", album:"playlistAlbum5", id: 11}) */
   
    return(
        <div className="TrackList">
            {/*You will add a map method that renders a set of Track components  -->*/}
            {
              tracks.map(track => {
                return <Track track={track}
                                key={track.id} 
                                onAdd={onAdd}
                                onRemove={onRemove}
                                isRemoval={isRemoval}/>
              })
                               
                 
            }
          
        </div>
    )
}

export default TrackList