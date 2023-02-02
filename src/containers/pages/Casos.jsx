import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Footer from "components/navigation/Footer"

function Casos(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-32">
            Casos
            </div>
            <Footer/>
        </Layout>
    )
}
export default Casos