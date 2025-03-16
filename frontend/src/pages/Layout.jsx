import { Outlet } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}>
            <div 
                style={{ 
                    position: 'fixed', 
                    top: 0, 
                    width: '100%', 
                    zIndex: 1000 
                }}>
                <Header />
            </div>            
            <div 
                style={{ 
                    flex: 1, 
                    marginTop: '60px' 
                }}>
                <Outlet />
            </div>
            <div style={{ position: 'relative', bottom: 0 }}>
                <Footer />
            </div>
        </div>
    )
}

export default Layout