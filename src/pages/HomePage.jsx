
import { useEffect } from "react";
import { HomeContent } from "../components/HomeContent";
import { PageFrame } from "../components/PageFrame";
import { PageTitle } from "../components/PageTitle";

function HomePage(){

    function Title() {
        useEffect(() => {
            document.title = 'My ecommerce';
        }, []);
    }

    return(
        <>{Title()}
            <PageFrame 
            pageTitle='HOME'
            content={<HomeContent/>}
            />
        </>
    );
}

export { HomePage };