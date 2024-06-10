import { PageFrame } from "../components/PageFrame";
import { ProductContent } from "../components/ProductContent";
import { ProductDetails } from "../components/ProductDetails";

function ProductPage(){
    return(
        <PageFrame
        pageTitle='PRODUCT'
        content={<ProductDetails/>}
        />

    );
}

export {ProductPage};