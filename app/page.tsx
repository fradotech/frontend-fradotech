import { config } from '@/app/_infrastructure/config'
import BannerCard from '@/components/molecules/card/BannerCard'
import Advertisement from '@/components/organism/advertisement/Advertisement'
import LatestPost from '@/components/organism/latestPost/LatestPost'
import { PostAction } from './(routes)/blog/_infrastructure/post.action'

export const metadata = {
  title: `Home Page | ${config.app.name}`,
  description: 'Generated by create next app',
}

export default async function Home() {
  const { data } = await PostAction.fetch()

  return (
    <main className="container mx-auto">
      <section>
        <BannerCard />
      </section>

      <section className="pt-12">
        <Advertisement />
      </section>

      <section className="my-20">
        <LatestPost data={data} />
      </section>

      <section className="mb-24">
        <Advertisement />
      </section>
    </main>
  )
}
