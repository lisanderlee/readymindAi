import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import { ShieldAlert, FileText, Files } from 'lucide-react'

export function Features() {
  return (
    <Container className={" pb-16"} >
    <div className='max-w-xl'>
      <div className="">
        <FileText color="#49DE80" size={40} />
        <h2 className="font-bold text-3xl tracking-tight text-green-400 mt-5">
          Procesamiento OCR de Alta Precisión{' '}
        </h2>
        <p className="mt-4 text-xl tracking-tight text-white">
          Con nuestra avanzada tecnología OCR, transformamos documentos en texto
          editable con una precisión inigualable, agilizando el procesamiento de
          datos y mejorando la eficiencia operativa.
        </p>
      </div>
      <div className="mt-10 ">
        <ShieldAlert color="#49DE80" size={40} />
        <h2 className="font-bold text-3xl tracking-tight text-green-400 mt-5 ">
          Seguridad de Datos con Azure{' '}
        </h2>
        <p className="mt-4 text-xl tracking-tight text-white">
          La seguridad de tus datos es nuestra prioridad. Utilizando las
          avanzadas medidas de seguridad de Azure, ofrecemos una protección de
          datos completa y confiable, manteniendo tu información segura.
        </p>
      </div>
      <div className="mt-10 ">
        <Files color="#49DE80" size={40} />
        <h2 className=" font-bold text-3xl tracking-tight text-green-400 mt-5 ">
          Escalabilidad y Adaptabilidad Personalizada{' '}
        </h2>
        <p className="mt-4 text-xl tracking-tight text-white">
          Nuestra plataforma se adapta y escala según tus necesidades
          empresariales, proporcionando una solución personalizable que
          evoluciona con tu empresa, garantizando siempre el máximo rendimiento
          y eficacia.
        </p>
      </div>
      </div>
    </Container>
  )
}
