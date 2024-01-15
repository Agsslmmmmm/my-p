import Image from 'next/image'
import HeroPage from '@/components/HeroPage'
import AboutPage from '@/components/AboutPage'
import BlogPage from '@/components/BlogPage'
import ContactPage from '@/components/ContactPage'
import TopNav from '@/components/TopNav'

export default function Home() {
  return (
    <main className='bg-white h-screen'>
      <div className='pt-10 md:pt-10 sm:pt-10 my-auto h-screen mb-12'>
        <HeroPage />
        <AboutPage />
        <BlogPage />
        <ContactPage />
      </div>
    </main>
  )
}
