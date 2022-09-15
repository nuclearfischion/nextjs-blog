// imports
import Link from "next/link";

export default function Card(props){
  const { title, date='Some time ago', href, tags } = props;
  console.log('card props')
  console.log(title)
  const styles = {
    border: '1px solid #f3f3f4',
    // boxShadow: 'inset 0px -1px 0px #f3f3f4',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
  };
  const titleStyles = {
    margin: '0',
  }
  const subtitleStyles = {
    fontSize: '14px',
  }
  const tagStyles = {
    display: 'inline-block',
    fontSize: '12px',
    color: '#0d0c22',
    fontWeight: 'bold',
    border: '1px solid #f3f3f4',
    padding: '4px 8px',
    margin: '16px 0 0 0',
  }
  return(
    <div style={styles}>
      <h2 style={titleStyles}>
        <Link href={href}>
          {title}
        </Link>
      </h2>
      <div style={subtitleStyles}>
        {date}
      </div>
      <div style={tagStyles}>
        Noteworthy
      </div>
    </div>
  )
}