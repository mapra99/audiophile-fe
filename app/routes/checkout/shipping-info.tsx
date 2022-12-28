import { Outlet } from '@remix-run/react'
import { Text } from '~/components'

export default () => {
  return (
    <div>
      <Text variant="subtitle" as="h3" className="mb-4">
        Shipping Info
      </Text>

      <Outlet />
    </div>
  )
}
