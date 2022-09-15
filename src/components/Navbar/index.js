// imports
import Link from 'next/link'

export default function Navbar(props){
  const styles = {
    display: 'flex',
    alignItems: 'center',
    height: '80px',
    boxShadow: 'inset 0px -1px 0px #f3f3f4',
    padding: '0 24px',
  };
  const linkStyles = {
    color: '#6e6d7a',
    padding: '30px 16px'
  };
  return (
    <div style={styles}>
      <Link href="/">
        <a style={linkStyles}>
          Home
        </a>
      </Link>
      <Link href="/posts">
        <a style={linkStyles}>
          Posts
        </a>
      </Link>
    </div>
  )
}
