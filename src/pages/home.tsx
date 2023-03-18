import BannerHeader from "../Components/BannerHeader";
import FavoriteProduct from "../Components/FavoriteProducts";
import LayoutDefault from "../Layout/default";

export default function Home() {
  return (
    <>
      <BannerHeader />
      <LayoutDefault>
        <FavoriteProduct />
      </LayoutDefault>
    </>
  );
}
