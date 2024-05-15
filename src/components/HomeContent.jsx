import { Product } from "../pages/Product";
import { HomeCarousel } from "./HomeCarousel";
import { ListaProdutos } from "./ListaProdutos";


function HomeContent(){
    return(
        <div>
            <HomeCarousel/>
            {/* <Product/> */}
            <ListaProdutos/>
        </div>
    );
}

export { HomeContent };