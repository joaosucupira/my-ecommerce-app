import { PageFrame } from "../components/PageFrame";
import { RegisterContent } from "../components/RegisterContent";
import { SearchContent } from "../components/SearchContent";

function SearchPage() {

    return(
        <PageFrame
        pageTitle='SEARCH'
        content={<SearchContent/>}
        />
    );
}

export { SearchPage };