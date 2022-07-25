import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SvgIcon from '@/components/svgs'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16 mb-8 border-t pt-6">
        <div className="flex mb-3 space-x-4">
          <SvgIcon kind='envelope' href={siteMetadata.email} title='E - Mail' target='_blank' />
          <SvgIcon kind='linkedin' href={siteMetadata.linkedin} title='LinkedIn' target='_blank' />
          <SvgIcon kind='github' href={siteMetadata.github} title='Github' target='_blank' />
          <SvgIcon kind='twitter' href={siteMetadata.twitter} title='Twitter' target='_blank' />
        </div>
        <div className="flex my-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <Link href="/">{siteMetadata.footerTitle}</Link>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span className="font-bold">Credit : </span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
            href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
          >
            Tailwind Nextjs Theme
          </a>
          <span> by </span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
            href="https://twitter.com/timlrxx"
          >
            Timothy Lin
          </a>
        </div>
      </div>
    </footer>
  )
}
