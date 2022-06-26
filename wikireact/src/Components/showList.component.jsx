
const ShowList = (props) => {

    return ( 
        <div className="mt-3">
        {/* Display the article details if article is not None */} 
        {props.page && props.page.map(item =>{
            return (
              <div key = {item}>
                <h2 className="text-second"> {item} </h2>
              </div>
            )
            })}
        </div>
    )
}

export default ShowList;