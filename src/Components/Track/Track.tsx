import "./Track.css"

interface ITrackProps {
    isRemoval: boolean
}

function Track(props: ITrackProps){
    const renderAction = () => {
        if (props.isRemoval){
            return <button className="Track-action">-</button>
        } else {
            return <button className="Track-action">+</button>
        }
    }

    return (

    )
}

export default Track