import AdminHeader from "../components/AdminHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout({children}){
    console.log(children.type)
    const childrenName=children.type.name;
    const admin=childrenName.split('n')[0];
    console.log(admin)
    return(
        <>
        {admin==='Admi' ? 
        <>
        <AdminHeader>
        {children}        
        </AdminHeader> 
        <Footer/>
        </>
        :
         <>
         <Header/>
         {children}
         <Footer/>
         </>
         }

        </>
    )
}