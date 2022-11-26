import { Text } from '~/components'
import type { HeadingProps } from './types'

const Heading = ({ name }: HeadingProps) => {
  return (
    <section className="bg-brown py-8 px-6 sm:py-24 sm:px-10">
      <Text variant="heading-2" as="h1" className="text-white text-center text-3xl tracking-wider sm:text-5xl max-w-6xl mx-auto">
        { name }
      </Text>
    </section>
  )
}

export default Heading
