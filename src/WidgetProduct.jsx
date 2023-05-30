import { FiPackage } from 'react-icons/fi';

export default function WidgetProduct(props) {
    return (
        <div>
            <div className="widget-product mt-14 border relative">
                <div className="image-container static ">
                    <img className="w-70 h-auto scale-75 static"
                        src={props.imageSource} />
                    <div className="w-24 absolute left-2 top-2">
                        <div className=' bg-[#535353] border rounded flex justify-center items-center'>
                            <FiPackage className="w-6 h-6 mr-1 ml-2 " style={{ color: "white" }} />
                            <span className="text-white text-xs ml-2">{props.kargoBilgi}</span>
                        </div>
                        <div className="-ml-6 -mt-6 ">
                            <img className="scale-50"src="https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png"  />
                        </div>


                    </div>
                </div>
            </div>

            <div className="description fixed-element">
                <div className="flex flex-col m-1">
                    <span className="brand text-[#333333]  font-bold text-sm">Rexona</span>
                    <span className="name text-[#666666] text-sm">Clinical Protection Kadın Stick Deodorant Shower Clean 45 ml 8690637811593</span>
                    <div className="m-1">
                        <span className="text-[#878787] line-through m-1">{props.fiyat}</span>
                        <span className="text-[#F27A1A] font-bold ">{props.indirimliFiyat}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}