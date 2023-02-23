import "./SearchResults.css"
import TrackList from "../TrackList/TrackList"
import ISongProps from "../../utils/Interface"

interface Props {
    items: ISongProps[]
}
function SearchResults(props:Props){
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList  />
        </div>
    )
}

export default SearchResults