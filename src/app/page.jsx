"use client"
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Features } from '@/components/Features'
import { Product } from '@/components/Product'
import { motion } from 'framer-motion'

export default function Home() {

  const sectionVariants1 = {
    offscreen: {
      y: -4,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.5,
        damping: 10,
      },
    },
  }


  return (
    <>
      <Header />
      <main>
        <Hero />
        <motion.div
          variants={sectionVariants1}
          initial="offscreen"
          whileInView="onscreen"
        >
        <Product />
        </motion.div>
        <motion.div
          variants={sectionVariants1}
          initial="offscreen"
          whileInView="onscreen"
        >
        <Features />
        </motion.div>
        {/* <PrimaryFeatures /> */}
        {/* <SecondaryFeatures /> */}

        {/* <Testimonials />
        <Pricing />
        <Faqs /> */}
      </main>
      <motion.div
          variants={sectionVariants1}
          initial="offscreen"
          whileInView="onscreen"
        >
      <Footer />
      </motion.div>
    </>
  )
}
