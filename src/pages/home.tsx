import BannerHeader from "../Components/BannerHeader";
import FavoriteProduct from "../Components/FavoriteProducts";
import Marks from "../Components/Marks";
import LayoutDefault from "../Layout/default";

export default function Home() {
  return (
    <>
      <BannerHeader />
      <LayoutDefault>
        <FavoriteProduct />
      </LayoutDefault>
      <Marks />
    </>
  );
}
