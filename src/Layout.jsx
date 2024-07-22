import Nav from './components/Nav'
import Footer from './Pages/home/Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />

      {children}

      <Footer />
    </div>
  )
}

export default Layout
