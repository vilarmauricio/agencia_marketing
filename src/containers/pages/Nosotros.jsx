import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Footer from "components/navigation/Footer"

function Nosotros(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-32">
            Nosotros
            </div>
            <Footer/>
        </Layout>
    )
}
export default Nosotros