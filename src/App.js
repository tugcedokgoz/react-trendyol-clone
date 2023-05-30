import Navbar from "./Navbar";
import Banner from "./Banner";
import Slider from "./Slider";
import BannerListItem from "./BannerListItem";
import ContentList from "./ContentList";
import WidgetProduct from "./WidgetProduct"
import WidgetProductList from "./WidgetProductList";
import SeoContent from "./SeoContent";
import PopularBrandCategoryContainer from "./PopularBrandCategoryContainer";
import Footer from "./Footer";
import MegaMenu from "./MegaMenu"


//  z-index
//  -> ! position ->  https://tailwindcss.com/docs/position 

function App() {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <MegaMenu/>
      <Banner />
      <Slider />
      <BannerListItem />
      <ContentList />
      <WidgetProductList/>
      <SeoContent/>
      <PopularBrandCategoryContainer/>
      <Footer/>
    </div>
  );
}

export default App;
