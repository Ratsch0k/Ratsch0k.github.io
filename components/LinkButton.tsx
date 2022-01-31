import Link from 'next/link'

export interface LinkButtonProps {
  href: string
  children: React.ReactNode | React.ReactNode[]
}


function LinkButton({href, children}: LinkButtonProps) {
  return (
    <div>
      <Link href={href}>
        <a className="text-xl border-solid border-2 p-2 rounded-lg hover:bg-secondary transition-colors">
          {children}
        </a>
      </Link>
    </div>
  )
}

export default LinkButton