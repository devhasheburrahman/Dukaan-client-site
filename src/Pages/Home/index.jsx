import Banner from "../../Component/Common/Banner";
import DealOffer from "../../Component/Common/DealOffer";
import Electronic from "../../Component/Common/Electronic";
import Footer from "../../Component/Common/Footer";
import MainHeader from "../../Component/Common/MainHeader";
import NewLatter from "../../Component/Common/Newlatter";
import OutDor from "../../Component/Common/OutDor";
import Recommended from "../../Component/Common/Recommended";
import SubHeader from "../../Component/Common/SubHeader";
import Suppliers from "../../Component/Common/suppliers";

export default function Home() {
    return (
        <div>
         
            <MainHeader />
            <SubHeader />
            <Banner />
            <DealOffer />
            <OutDor />
            <Electronic />
            <Suppliers />
            <Recommended />
            <NewLatter />
            <Footer />
        </div>
    )
}
