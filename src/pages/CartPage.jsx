
import { BrunoCart } from "../components/BrunoCart";
import { CartContent } from "../components/CartContent";
import { PageFrame } from "../components/PageFrame";
// import { PageTitle } from "../components/PageTitle";

function CartPage(){
    return(
        <PageFrame 
        pageTitle='CART'
        // content={<CartContent/>}
        content={<BrunoCart/>}
        />
    );
}

export { CartPage };