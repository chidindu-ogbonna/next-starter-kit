import { PageSEO } from '@/components/AppSEO'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SelectedWork from '@/components/SelectedWork'
import Footer from '@/components/Footer'

export default function Index() {
  return (
    <>
      <PageSEO
        title={'AlaLabs - A home for professional and experimental projects'}
        description={'A home for professional and experimental projects'}
      />

      <div className="min-h-screen bg-zinc-900 p-4 text-white">
        <Header className={'mb-6 mt-5'} />
        <Hero className={'mb-6 mt-28'} />

        <div
          id="works"
          className="mb-6 rounded-xl bg-zinc-800 px-6 py-3 text-lg text-white lg:px-10"
        >
          Selected Work
        </div>

        <SelectedWork className={'mb-6'} />
        <Footer className={'mb-6'} />
      </div>
    </>
  )
}
