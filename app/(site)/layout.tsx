import Footer from './components/layout/Footer'
import Header from './components/layout/Header'




export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="">
      <Header/>
      <div className="max-w-7xl mt-10 mx-5 lg:mx-auto m-auto    ">
        {children}
      </div>
      <Footer/>
      </div>
  )
}

