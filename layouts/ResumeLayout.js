import ScrollTop from '@/components/ScrollTop'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import SvgIcon from '@/components/svgs'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
// import 'react-vertical-timeline-component/style.min.css'
import experience from '@/data/experience'

const buildTimeLineElements = (data) => {
  return data.map(function (item, i) {
    const technologies = item.technologies || []
    const details = item.details || []
    const certifications = item.certifications || []

    const tech = technologies.map((technology, i) => {
      return (
        <span key={i} className='pill'>
          {technology}
        </span>
      )
    })

    const det = details.map((detail, i) => {
      return (
        <li key={i}>{detail}</li>
      )
    })

    const certs = certifications.map((cert, i) => {
      return (
        <a key={i} href={cert.url}><img src={cert.img} /></a>
      )
    })

    return (
      <VerticalTimelineElement
        className='text-white'
        date={item.years}
        iconClassName='bg-primary-600'
        dateClassName='text-black dark:text-white opacity-100'
        icon={<SvgIcon kind={item.icon} />}
        textClassName='text-dark dark:text-white bg-dark dark:bg-white'
        key={i} >
        <h3 className='mt-0 text-white dark:text-dark'>
          {item.title}
        </h3>
        <h4 className='text-white dark:text-dark'>
          {item.company}
        </h4>
        <ul className='text-white dark:text-dark'>
          {det}
        </ul>
        {certs.length > 0 &&
          <div>
            <h4 className='text-white dark:text-dark'>
              Certifications
            </h4>
            <div className='text-white dark:text-dark'>
              {certs}
            </div>
          </div>}

        {tech.length > 0 && <div>{tech}</div>}
      </VerticalTimelineElement>
    )
  })
}

export default function ResumeLayout() {
  if (experience) {
    const work = buildTimeLineElements(experience.work)
    const education = buildTimeLineElements(experience.education)
    return (
      <>
        <PageSeo title={`Resume - ${siteMetadata.author}`} description={`Resume - ${siteMetadata.author}`} />
        <ScrollTop />
        <div className="divide-y">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Resume
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              My working experiences and skills
            </p>
          </div>
          <div className="space-y-2 xl:space-y-0">
            <div className="pt-8 pb-8 prose prose-lg max-w-none">
              <VerticalTimeline
                lineColor='teal'>
                {work}
                {education}
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </>
    )
  }
}
