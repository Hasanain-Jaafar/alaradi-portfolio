import Link from 'next/link'
const styles = {
    logo:'font-logo text-4xl text-neutral-800/95 cursor-pointer transition-all duration-200 hover:text-neutral-800/65 ',
    link:'font-heading text-lg text-neutral-800/95 cursor-pointer transition-all duration-200 hover:text-neutral-800/65'
}
function Links({path,name, styleType}) {
  return (
    <div>
        <Link href={path} className={styles[styleType]}>{name}</Link>
    </div>
  )
}

export default Links