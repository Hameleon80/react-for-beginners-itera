type BioType = { biography: string }

export function Bio(props: BioType) {
    return (
        <div className="textStyle">
            <h2>
                <i className="textName">Biography:</i> 
                <div className="text">{props.biography}</div>
            </h2>
        </div>
    )
}