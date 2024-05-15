
import { LoginContent } from "../components/LoginContent";
import { PageFrame } from "../components/PageFrame";
import { PageTitle } from "../components/PageTitle";

function LoginPage(){
    return(
        // <PageFrame 
        // pageTitle='LOGIN'
        // content={<LoginContent/>}
        // />
        <LoginContent/>
    );
}

export { LoginPage };