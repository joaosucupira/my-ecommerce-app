
import { HomeContent } from "../components/HomeContent";
import { PageFrame } from "../components/PageFrame";
import { PageTitle } from "../components/PageTitle";

function HomePage(){

    return(
        <PageFrame 
        pageTitle='HOME'
        content={<HomeContent/>}
        />
    );
}

export { HomePage };