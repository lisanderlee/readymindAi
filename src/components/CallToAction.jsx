import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
   
   
      <Container className="relative">
      <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
          Maximizando la Eficiencia con Inteligencia Avanzada
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
          OCR y Seguridad: Pilares de la Innovación en ReadyMind AI
          </p>
        </div>
        <div className="mx-auto max-w-lg text-center">
          <p className="mt-4 text-lg tracking-tight text-white">
            Nuestra plataforma de ReadyMind AI no es solo una herramienta de
            procesamiento de datos, es un aliado estratégico en tu viaje hacia
            la eficiencia y seguridad digital. Al aprovechar la tecnología OCR
            de vanguardia, transformamos rápidamente documentos físicos y
            digitales en datos editables y analizables, facilitando una amplia
            gama de aplicaciones empresariales, desde la automatización de
            procesos hasta el análisis de datos en profundidad.
          </p>
          <p className="mt-4 text-lg tracking-tight text-white">
            Además, gracias a la robusta infraestructura de seguridad
            proporcionada por Azure, garantizamos la máxima protección de tus
            datos. Este enfoque integral hace que nuestra plataforma sea ideal
            para empresas que buscan no solo adaptarse a las demandas del
            mercado actual, sino también liderar en innovación y eficiencia
            operativa.
          </p>
        </div>
      </Container>

  )
}
