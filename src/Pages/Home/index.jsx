import Banner from "../../Component/Common/Banner";
import Footer from "../../Component/Common/Footer";
import MainHeader from "../../Component/Common/MainHeader";
import NewLatter from "../../Component/Common/Newlatter";
import Recommended from "../../Component/Common/Recommended";
import SubHeader from "../../Component/Common/SubHeader";

export default function Home() {
    return (
        <div>
            <MainHeader />
            <SubHeader />
            <Banner />
            <Recommended />
            <NewLatter />
            <Footer />
        </div>
    )
}
