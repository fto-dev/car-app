import FavoritesComponent from "@/components/favorites";
import PageHoc from "@/components/providersHoc/PageHOC";

const Favorites = () => <FavoritesComponent />;
export default PageHoc(Favorites);
