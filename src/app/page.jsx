import styles from './page.module.css';
import Header from '../components/header';
import SideBar from '../components/sideBar/sideBar';
import Welcome from '../components/welcome/welcome';
import Footer from '../components/footer/footer';

export default function Home () {
  return (
<div>
          <Header />
        <main className={styles.dashboardContainer}>
        <SideBar />
        <Welcome />  
        </main>
        <Footer />
</div>
  )
}