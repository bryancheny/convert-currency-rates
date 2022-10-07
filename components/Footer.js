import styles from './Footer.module.css'
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>

        Made with &nbsp; <Image src={'/Nextjs-logo.svg'} height={25} width={40}/>&nbsp;, <Image src='/React-icon.svg' height={25} width={30}/> React and <Image src={'/react-bootstrap.png'} height={25} width={30}/> React-Bootstrap 
        <br></br>
      </footer>
    </>
  )
}
