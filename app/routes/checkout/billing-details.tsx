import { Outlet } from '@remix-run/react'
import trackPageView from '~/utils/track-page-view'

import type { LoaderArgs } from '@remix-run/node'

export const loader = async ({ request }: LoaderArgs) => {
  trackPageView(request)
  return null;
}

export default () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}
