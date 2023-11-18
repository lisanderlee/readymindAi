import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { defaultConfig } from 'next/dist/server/config-shared'

export default  function Loading() {
  return (
    <Container className={" h-screen pb-16 pt-20 lg:pt-32"}>
  
        <div className=" text-white">
     Loading
      </div>
    </Container>
  )
}
