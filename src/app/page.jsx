import Link from "next/link";
import './globals.css'
import styles from './homepage.module.css'
import Landing from "@/components/landing/Landing";
import About from "@/components/about/About";
import Features from "@/components/features/Features";
import Questions from "@/components/faq/Questions";
import Newsletter from "@/components/newsletter/Newsletter";

import Questions from "@/components/faq/Questions";
import Newsletter from "@/components/newsletter/Newsletter";


export default function Home() {
  return (
    <div className={styles.container}>
      <Landing/>
      <About/>
      <Features/>
      <Questions/>
      <Newsletter/>
    </div>
  );
}
