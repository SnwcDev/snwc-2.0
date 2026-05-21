import HeroExperience from '@/app/components/HeroExperience'
import LatestPosts from '@/app/components/LatestPosts'
import AboutMe from '@/app/components/AboutMe'

export default async function Page() {
  return (
    <>
      <HeroExperience />
      <LatestPosts />
      <AboutMe />
    </>
  )
}

