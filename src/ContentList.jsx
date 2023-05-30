import ContentItem from "./ContentItem"
export default function ContentList(){

    // veriyi al 

    return (
        <div className="grid grid-cols-3 gap-4">
            <ContentItem marka="TERLİK" imageSource="https://cdn.dsmcdn.com/ty860/pimWidgetApi/mobile_20230502075615_2306428AyakkabiCantaMobile202304281005.jpg" />
            <ContentItem marka="SAAT" imageSource="https://cdn.dsmcdn.com/ty901/campaign/banners/original/621033/15eab1bb5e_2.jpg" />
            <ContentItem marka="CROCS" imageSource="https://cdn.dsmcdn.com/ty900/pimWidgetApi/mobile_20230523132651_mobile202204131927231234567AyakkabiCantaMobile202204131601crocs.jpg" /> 
            <ContentItem marka="PUMA" imageSource="https://cdn.dsmcdn.com/ty850/pimWidgetApi/mobile_20230428124118_2307236KadinMobile202304251503.jpg" />
            <ContentItem marka="YEMEK" imageSource="https://cdn.dsmcdn.com/ty872/pimWidgetApi/mobile_20230508133628_2317001SupermarketMobile202305081602.jpg" />
            <ContentItem marka="KOTON"  imageSource="https://cdn.dsmcdn.com/ty887/pimWidgetApi/mobile_20230516110921_087070KadinMobile202305161401.jpg" /> 
        </div>
    )
}