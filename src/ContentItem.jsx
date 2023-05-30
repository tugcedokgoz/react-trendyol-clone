export default function ContentItem(props){
    return (
        <>
            <div className="flex m-4">
                <div className="m-2 cursor-pointer">   
                    <a>
                        <span className="image-container" >
                            <img className="rounded-t-lg h-48 hover:scale-105  w-100 h-100" 
                            src={props.imageSource} 
                            style={{
                                height: '100%',
                                width: '100%',
                              }} />
                        </span>
                        <div className="flex place-content-between rounded-b-lg bg-[#1B1B1B] text-white font-bold p-2  
                        hover:bg-pink-500   ">
                            <span>{props.marka}</span>
                            <span>Alışverişe Başla</span>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}