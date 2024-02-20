import {Navbar} from "@/src/app/(landingpage)/_components/navbar";
import {Footer} from "@/src/app/(landingpage)/_components/footer";

const LandingPageLayout =  ({
    children
} : {
    children: React.ReactNode;
}) => {
    return(
        <div style={{height: "100%" }}>
            <Navbar/>
            <main style={{ paddingBottom: "5rem", paddingTop:"10rem"}}>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default LandingPageLayout;