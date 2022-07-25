import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Twemoji from '@/components/Twemoji.js'
import TypedBios from '@/components/TypedBios'
import siteMetadata from '@/data/siteMetadata'
import SvgIcon from '@/components/svgs'

export default function Home() {
  const headingColorClass =
    'bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600'
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700 mt-8 md:mt-16">
        <div className="md:my-4 md:pt-6 md:pb-8 space-y-2 md:space-y-5">
          <div className="xl:col-span-2 md:pr-8">
            <p className={`mb-8 text-4xl leading-[60px] font-extrabold tracking-tight text-transparent bg-clip-text ${headingColorClass} md:text-6xl md:leading-[86px]`}>
              Hi <i className="twa twa-waving-hand"></i> I'm {siteMetadata.author}
            </p>
            <div className="text-lg leading-8 text-gray-600 dark:text-gray-400">
              <h1 className="text-neutral-900 dark:text-neutral-200">
                I&#39;m <span className="font-medium">{siteMetadata.author}</span> - an open-minded{' '}
                <span className="font-medium">Security Researcher</span> in{' '}
                <span className="font-medium hidden">India</span>
                <span className="align-middle flag-vn">
                  <Twemoji emoji="flag-india" />
                </span>
              </h1>
              <TypedBios />
              <p className="mt-4 mb-8">
                I started my journey in 2017 with C/C++/Python in college.
                <br />
                I had my first job as a DevOps Engineer in 2021.
                <br />
                I&#39;m a Cybersecurity enthusiast. I love doing research and pen-testing.
                <br />
                Currently I&#39;m working as a Security Test Engineer at <a href='https://www.oneadvanced.com/' target="_blank">Advanced</a>.
              </p>
              <div className="flex flex-col space-y-1">
                {/* <Link href="/projects" className="hover:underline">
                  <Twemoji emoji="hammer-and-wrench" />
                  <span className="ml-2">What have I built?</span>
                </Link>
                <Link href="/blog" className="hover:underline">
                  <Twemoji emoji="memo" />
                  <span className="ml-2">My writings</span>
                </Link> */}
                <Link href="/about" className="hover:underline">
                  <Twemoji emoji="face-with-monocle" />
                  <span className="ml-2">More about me and myself</span>
                </Link>
                <Link href="/resume" className="hover:underline">
                  <Twemoji emoji="briefcase" />
                  <span className="ml-2">My resume</span>
                </Link>
              </div>
              <p className="my-8">
                Think before you click!!
              </p>
            </div>
            <div className='mt-10 flex mb-3 space-x-4'>
              <SvgIcon kind='envelope' href={siteMetadata.email} title='E - Mail' target='_blank' />
              <SvgIcon kind='linkedin' href={siteMetadata.linkedin} title='LinkedIn' target='_blank' />
              <SvgIcon kind='github' href={siteMetadata.github} title='Github' target='_blank' />
              <SvgIcon kind='twitter' href={siteMetadata.twitter} title='Twitter' target='_blank' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
