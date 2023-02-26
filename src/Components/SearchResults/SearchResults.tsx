import React from "react"
import "./SearchResults.css"
import TrackList from "../TrackList/TrackList"
import ISongProps from "../../utils/Interface"



function SearchResults({tracks}: {tracks: ISongProps[]}){   
    
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={tracks}/>
        </div>
    )
}

export default SearchResults