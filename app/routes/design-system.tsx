import { Button } from "~/components"

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
          <div className="bg-orange w-20 h-20 rounded-md hover:w-36 transition-all" />
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

        <div className="flex flex-wrap gap-4">
          
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
