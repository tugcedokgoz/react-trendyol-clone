import WidgetProduct from "./WidgetProduct"
export default function WidgetProductList(){

    // veriyi al 

    return (
        <div className="grid grid-cols-5 gap-4">
            <WidgetProduct kargoBilgi="KARGO BEDAVA" fiyat="300,85" indirimliFiyat="120,75" imageSource="https://cdn.dsmcdn.com/ty522/product/media/images/20220907/14/170132297/13962991/2/2_org.jpg" />
            <WidgetProduct indirimliFiyat="250,90" imageSource="https://cdn.dsmcdn.com/ty901/product/media/images/20230523/12/356294821/391502000/1/1_org.jpg" />
            <WidgetProduct indirimliFiyat="170,80" imageSource="https://cdn.dsmcdn.com/ty820/product/media/images/20230410/12/321448900/183397489/1/1_org.jpg" />
            <WidgetProduct fiyat="160,60" indirimliFiyat="100,30" imageSource="https://cdn.dsmcdn.com/ty901/product/media/images/20230523/13/356434240/502111288/1/1_org.jpg"/>
            <WidgetProduct indirimliFiyat="180,80" imageSource="https://cdn.dsmcdn.com/ty850/product/media/images/20230427/19/333492527/503937784/1/1_org.jpg"/>
        </div>
    )
}