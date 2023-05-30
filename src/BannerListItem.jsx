export default function BannerListItem(){
    return (
       <>
       <div className="flex flex-row m-2 justify-center mb-12">
        <div className="bg-green-100 px-20 py-4 text-emerald-800 font-bold mx-6 ">
            Sepete En Çok Eklenen
        </div>
        <div className="bg-orange-100 px-20 py-4 text-orange-800 font-bold mx-6 ">
            En Çok Öne Çıkanlar
        </div>
        <div className="bg-pink-100 px-28 py-4 text-pink-800 font-bold mx-8 ">
            Flash Ürünler
        </div>
        </div>
       </>
    )
}