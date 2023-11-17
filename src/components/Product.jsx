import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import { FileCheck2, MoveRight, Waves } from 'lucide-react'

export function Product() {
  return (
    <Container className={" h-screen pb-16 pt-20 lg:pt-32"}>
      <div className="max-w-3xl">
        <div className="">
         
       
          <p className="mt-4 text-3xl antialiased leading-relaxed	 tracking-wide text-green-400">
           Nuestra avanzada tecnología OCR no solo convierte
            documentos impresos en datos útiles, sino que también es capaz de
            traducir texto escrito a mano a datos digitales, ampliando
            significativamente las posibilidades de automatización y análisis.
           
          </p>
          <div className='flex flex-row mt-10'>
          <Waves color="#49DE80" size={60} />
          <MoveRight color="#49DE80" size={60} className='ml-3'/>
          <FileCheck2 color="#49DE80" size={60} className='ml-3'/>
          </div>
        </div>
      </div>
    </Container>
  )
}
