import { Text, ButtonLink } from '~/components'
import trackPageView from '~/utils/track-page-view'

import type { LoaderArgs } from '@remix-run/node'

export const loader = async ({ request }: LoaderArgs) => {
  trackPageView(request)
  return null
}

export default () => {
  return (
    <div>
      <Text variant="heading-4" className="mb-6">
        Sorry, there was an issue with your payment. Please try again later
      </Text>

      <ButtonLink to="/" variant="primary" className='text-center'>
        Go Home
      </ButtonLink>
    </div>
  )
}
