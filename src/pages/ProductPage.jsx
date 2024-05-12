import { PageFrame } from "../components/PageFrame";
import { ProductContent } from "../components/ProductContent";

function ProductPage(){
    return(
        <PageFrame
        pageTitle='PRODUCT'
        content={<ProductContent/>}
        />

    );
}

export {ProductPage};