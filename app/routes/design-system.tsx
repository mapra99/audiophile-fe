import { Button, Text, TextInput } from "~/components"

export default () => {
  return (
    <div className="max-w-5xl p-4">
      <Text variant="heading-1" className="my-3">
        DESIGN SYSTEM
      </Text>

      <div className="my-6">
        <Text variant="heading-2" className="my-3">
          <span className="text-orange pr-2">
            01
          </span>
          COLORS
        </Text>

        <div className="flex flex-wrap gap-4">
          <div className="bg-orange border w-20 h-20 rounded-md hover:w-36 transition-all" />
          <div className="bg-brown border w-20 h-20 rounded-md hover:w-36 transition-all" />
          <div className="bg-gray border w-20 h-20 rounded-md hover:w-36 transition-all" />
          <div className="bg-gray-light border w-20 h-20 rounded-md hover:w-36 transition-all" />
          <div className="bg-orange-light border w-20 h-20 rounded-md hover:w-36 transition-all" />
          <div className="bg-white border w-20 h-20 rounded-md hover:w-36 transition-all" />
          <div className="bg-black border w-20 h-20 rounded-md hover:w-36 transition-all" />
        </div>
      </div>

      <div className="my-6">
        <Text variant="heading-2" className="my-3">
          <span className="text-orange pr-2">
            02
          </span>
          TYPOGRAPHY
        </Text>

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
        <Text variant="heading-2" className="my-3">
          <span className="text-orange pr-2">
            03
          </span>
          BUTTONS
        </Text>

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

      <div className="my-6">
        <Text variant="heading-2" className="my-3">
          <span className="text-orange pr-2">
            04
          </span>
          Form Controls
        </Text>

        <div className="flex flex-wrap gap-4">
          <TextInput label="Name" id="name" type="text" placeholder="Insert your name" />
          <TextInput label="Name" id="name" type="text" placeholder="Insert your name" value="!@#!@$!@" error="Wrong format" />
        </div>
      </div>
    </div>
  )
}
