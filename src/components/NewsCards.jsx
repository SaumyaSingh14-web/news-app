
  
const NewsCards = (props) => {
    const errorImage =
      "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    return (
      <div className={props.data.className + " "}>
        <div className="bg-blue-50 min-h-image-height w-96 flex flex-col border-2 border-gray-400 shadow-xl rounded-tl-xl rounded-br-xl">
          <div className="flex flex-1">
            <img
              src={props.data.urlToImage ? props.data.urlToImage : errorImage}
              alt={props.data?.source}
              className="rounded-tl-xl"
            />
          </div>
          <div className="flex flex-1 flex-col border-t-2 border-gray-400 p-3 space-y-3">
            <p className="font-bold text-base">
              {props.data?.content
                ? props.data?.title?.substring(0, 40) + "..."
                : "No Title"}
            </p>
            <p className="text-sm">
              {props.data?.content
                ? props.data?.content?.substring(0, 200) + "..."
                : "No Content"}
            </p>
            <div className="flex justify-between">
              <div className="bg-red-100 p-2 rounded-xl">
                <p className="text-xs text-red-600">{props.data?.source?.name}</p>
              </div>
              <div className="bg-red-100 p-2 rounded-xl">
                <p className="text-xs text-red-600">
                  {props.data?.author ? props.data.author : "Missing"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewsCards;