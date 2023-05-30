export default function PopularBrandCategoryContainer() {
    return (
    <div className="grid grid-cols-12 my-2 justity-center items-center w-[100%]">
        <div className="mx-2 col-span-6">
            <h3 className="font-medium text-3xl font-sans ">Popüler Marka ve Mağazalar</h3>
            <div className="m-2 grid grid-col-3 grid-flow-col  grid-gap-4 text-sm">
                <div className="grid grid-flow-row gap-2">
                    <a className="flex" href="#">Columbia</a>
                    <a className="flex" href="#">New Balance</a>
                    <a className="flex" href="#">Dockers</a>
                    <a className="flex" href="#">Moncler</a>
                </div> 
                <div  className="grid grid-flow-row gap-2">
                    <a className="flex" href="#">Zippo</a>
                    <a className="flex" href="#">The North Face</a>
                    <a className="flex" href="#">Emporio Armani</a>
                    <a className="flex" href="#">Gilette</a>
                </div>
                <div  className="grid grid-flow-row gap-2">
                    <a className="flex" href="#">Vakko</a>
                    <a className="flex" href="#">Bershka</a>
                    <a className="flex" href="#">Beymen</a>
                    <a className="flex" href="#">Timberland</a>
                </div>
            </div>
        </div>
        <div className="mx-2 col-span-6">
            <h3 className="font-medium text-3xl font-sans ">Popüler Sayfalar</h3>
            <div className="m-2 grid grid-col-3 grid-flow-col grid-gap-4 text-sm">
                <div className="grid grid-flow-row gap-2">
                <a className="flex" href="#">Erkek Kol Düğmesi</a>
                <a className="flex" href="#">Erkek Cüzdan</a>
                <a className="flex" href="#">Papyon</a>
                <a className="flex" href="#">Kıravat</a>
                </div> 
                <div  className="grid grid-flow-row gap-2">
                    <a className="flex" href="#">Erkek Broş</a>
                    <a className="flex" href="#">Takım Elbise</a>
                    <a className="flex" href="#">Mayo</a>
                    <a className="flex" href="#">Saat</a>
                </div>
                <div  className="grid grid-flow-row gap-2">
                    <a className="flex" href="#">Çorap</a>
                    <a className="flex" href="#">Bileklik</a>
                    <a className="flex" href="#">Terlik</a>
                    <a className="flex" href="#">Küpe</a>
                </div>
            </div>
        </div>
    </div>
    )
}
