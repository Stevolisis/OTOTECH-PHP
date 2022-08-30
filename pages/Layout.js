import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout({children}){
    //console.log(children.type.name)
    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}