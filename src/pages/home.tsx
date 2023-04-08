import BannerHeader from "../Components/BannerHeader";
import FavoriteProduct from "../Components/FavoriteProducts";
import Contact from "../Components/Contact";
import Marks from "../Components/Marks";
import ResellerCall from "../Components/ResellerCall";
import LayoutDefault from "../Layout/default";

export default function Home() {
  return (
    <>
      <BannerHeader />
      <LayoutDefault>
        <FavoriteProduct />
        <ResellerCall />
      </LayoutDefault>
      <Marks />
      <LayoutDefault>
        <Contact />
      </LayoutDefault>
    </>
  );
}
