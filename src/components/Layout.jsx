import { PageFrame } from "./PageFrame";

function Layout({children}){
    return(
        <PageFrame children={children}/>
    );
}

export { Layout };