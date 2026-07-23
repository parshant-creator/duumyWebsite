import { useSearchParams } from "react-router-dom";
import SearchResult from "./SearchResult";
import MobileSearch from "./MobileSearch";

export default function Search() {
  const [params] = useSearchParams();
  const keyword = params.get("q");
  return keyword ? <SearchResult /> : <MobileSearch />;
}
