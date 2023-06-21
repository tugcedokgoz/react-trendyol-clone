import Banner from "./Banner";
import Slider from "./Slider";
import BannerListItem from "./BannerListItem";
import ContentList from "./ContentList";
import WidgetProduct from "./WidgetProduct";
import WidgetProductList from "./WidgetProductList";
import SeoContent from "./SeoContent";
import PopularBrandCategoryContainer from "./PopularBrandCategoryContainer";
import Footer from "./Footer";
import MegaMenu from "./MegaMenu";

import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <MegaMenu />
      <Banner />
      <Slider />
      <BannerListItem />
      <ContentList />
      <WidgetProductList />
      <SeoContent />
      <PopularBrandCategoryContainer />
      <Footer />
    </div>
  );
}
