import HeroExperience from '@/app/components/HeroExperience'
import IdentityScroll from '@/app/components/IdentityScroll'
import LatestPosts from '@/app/components/LatestPosts'

export default async function Page() {
  return (
    <>
      <HeroExperience />
      <LatestPosts />
      <IdentityScroll />
    </>
  )
}
