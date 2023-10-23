import FavoritesComponent from "@/components/favorites";
import PageHoc from "@/components/providersHoc/pageHOC";

const Favorites = () => <FavoritesComponent />;
export default () => PageHoc(Favorites, "Favorite");
