import React from "react"
import "./SearchResults.css"
import TrackList from "../TrackList/TrackList"
import ISongProps from "../../utils/Interface"



function SearchResults({props}: {props: ISongProps[]}){   
    
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList props={props}/>
        </div>
    )
}

export default SearchResults