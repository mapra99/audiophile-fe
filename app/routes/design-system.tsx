import { Button, Text } from "~/components"

export default () => {
  return (
    <div className="max-w-5xl m-4">
      <h1 className="font-sans text-3xl font-bold text-brown mb-4">
        DESIGN SYSTEM
      </h1>

      <div className="my-6">
        <h2 className="font-sans text-xl font-bold text-brown mb-3">
          1. COLORS
        </h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-orange sm:bg-black w-20 h-20 rounded-md hover:w-36 transition-all" />
          <div className="bg-brown w-20 h-20 rounded-md hover:w-36 transition-all" />
          <div className="bg-gray w-20 h-20 rounded-md hover:w-36 transition-all" />
          <div className="bg-gray-light w-20 h-20 rounded-md hover:w-36 transition-all" />
          <div className="bg-orange-light w-20 h-20 rounded-md hover:w-36 transition-all" />
          <div className="bg-white w-20 h-20 rounded-md hover:w-36 transition-all" />
          <div className="bg-black w-20 h-20 rounded-md hover:w-36 transition-all" />
        </div>
      </div>

      <div className="my-6">
        <h2 className="font-sans text-xl font-bold text-brown mb-3">
          2. TYPOGRAPHY
        </h2>

        <div className="flex flex-col gap-4">
          <Text variant="heading-1">
            Morbi interdum mollis sapien
          </Text>

          <Text variant="heading-2">
            Donec nec justo eget felis facilisis
          </Text>

          <Text variant="heading-3">
            Nunc sem lacus accum
          </Text>

          <Text variant="heading-4">
            interdum consectetuer
          </Text>

          <Text variant="heading-5">
            nascetur ridiculus mus
          </Text>

          <Text variant="heading-6">
            natoque penatibus et
          </Text>

          <Text variant="overline">
            LOREM IPSUM
          </Text>

          <Text variant="subtitle">
            Fusce ut est sed dolor gravida convallis
          </Text>

          <Text variant="body">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
          </Text>
        </div>
      </div>

      <div className="my-6">
        <h2 className="font-sans text-xl font-bold text-brown mb-3">
          3. BUTTONS
        </h2>

        <div className="flex flex-wrap gap-4">
          <Button variant="primary">
            See Product
          </Button>

          <Button variant="secondary">
            See Product
          </Button>

          <Button variant="tertiary">
            See Product
          </Button>
        </div>
      </div>
    </div>
  )
}
