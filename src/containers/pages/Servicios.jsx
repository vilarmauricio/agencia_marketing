import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Footer from "components/navigation/Footer"

function Servicios(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-32">
            Servicios
            </div>
            <Footer/>
        </Layout>
    )
}
export default Servicios