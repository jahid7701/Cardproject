
import Fees from '@/components/ui/Fees'
import Footer from '@/components/ui/Footer'
import Styleguide from '@/components/ui/Styleguide'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white  mx-auto overflow-hidden">
  <Styleguide/>
<Fees/>
            <Footer/>
           
    </main>
  )
}
