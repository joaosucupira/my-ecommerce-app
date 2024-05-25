import { PageFrame } from "../components/PageFrame";
import { RegisterContent } from "../components/RegisterContent";

function RegisterPage() {

    return(
        <PageFrame
        pageTitle='REGISTER'
        content={<RegisterContent/>}
        />
    );
}

export { RegisterPage };