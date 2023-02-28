import React from "react"
import "./SearchResults.css"
import TrackList from "../TrackList/TrackList"
import ISongProps from "../../utils/Interface"

interface SearchResultsProps {
    tracks: ISongProps[],
    onAdd: (track: ISongProps) => void 
}


function SearchResults(props: SearchResultsProps){  
    const {tracks, onAdd} = props


    
  
    return (    
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={tracks} onAdd={onAdd} isRemoval={false}/>
        </div>
    )
}

export default SearchResults