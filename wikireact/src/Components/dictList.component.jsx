
const DictList = (props) => {
    return (
        <div className="mt-2">
        {/* Display the article details if article is not None */} 
        {props.pages && props.pages.map(item =>{
            return (
              <div key = {item}>
                <h2 className="text-primary"> {item} </h2>
              </div>
            )
            })}
        </div>
        )
}

export default DictList;