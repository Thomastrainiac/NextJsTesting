import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <style>
          @import url(&apos;https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap&apos;);
      </style>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}