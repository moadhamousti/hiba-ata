import Link from "next/link";
import './globals.css'
import styles from './homepage.module.css'
import Landing from "@/components/landing/Landing";
import Features from "@/components/features/Features";
import Questions from "@/components/faq/Questions";
import Newsletter from "@/components/newsletter/Newsletter";
import AboutUsComponent from '../components/AboutUsComponent/page'


export default function Home() {
  return (
    <div className={styles.container}>
      <Landing/>
      <AboutUsComponent/>
      <Features/>
      <Questions/>
      <Newsletter/>
    </div>
  );
}
