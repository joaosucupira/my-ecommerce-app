import { OrdersContent } from "../components/OrdersContent";
import { PageFrame } from "../components/PageFrame";

function OrdersPage(){
    return(
        <PageFrame
        pageTitle='ORDERS'
        content={<OrdersContent/>}
        />
    );
}

export { OrdersPage };