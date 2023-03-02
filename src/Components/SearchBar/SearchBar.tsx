import "./SearchBar.css"

interface ISearchBarProps{
    onSearch(searchTerm: string): void,
    onChange(newTerm: string): void,
    term: string
}




function SearchBar(props: ISearchBarProps){
    const {onSearch, onChange, term} = props

    const search = () => {
        
        onSearch(term)
        
    }
    const handleTermChange = (event: React.FormEvent<HTMLInputElement>) =>{
        onChange(event.currentTarget.value)
   }
    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange}/>
            <button className="SearchButton" onClick={() => search()} type="button">SEARCH</button>
        </div>    )
}

export default SearchBar