import { Product } from "./Product";
import { HomeCarousel } from "./HomeCarousel";
import { ListaProdutos } from "./ListaProdutos";
import { ListCategories } from "./ListCategories";


function HomeContent(){
    return(
        <div>
            <HomeCarousel/>
            {/* <Product/> */}
            <ListaProdutos/>
            {/* <ListCategories/> */}
        </div>
    );
}

export { HomeContent };