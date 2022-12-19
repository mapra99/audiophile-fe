import { Outlet } from '@remix-run/react'
import { Text } from '~/components'

export default () => {
  const goBack = () => history.back()

  return (
    <div className="bg-gray">
      <div className="pt-4 pb-6 px-6 sm:pt-12 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <button onClick={goBack} className="text-base text-black opacity-50 hover:opacity-100 transition">
            Go Back
          </button>
        </div>
      </div>

      <div className="px-6 pb-24 sm:px-10 sm:pb-28 flex flex-col gap-8">
        <div className="rounded-lg bg-white px-6 py-8 sm:p-8">
          <Text variant="heading-3" className="!text-3xl sm:!text-4xl mb-8" as="h2">
            Checkout
          </Text>

          <Outlet />
        </div>

        <div className="rounded-lg bg-white px-6 py-8 sm:p-8">
          <Text variant="heading-6" className="mb-8" as="h2">
            Summary
          </Text>
        </div>
      </div>
    </div>
  )
}
