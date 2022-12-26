import invariant from 'tiny-invariant'
import { createPageView } from '~/models/page-view'
import { getOrCreateSessionId } from '~/utils/session-storage'

const trackPageView = async (request: Request) => {
  const { sessionId } = await getOrCreateSessionId(request)
  invariant(sessionId, 'sessionId must exist')

  createPageView(sessionId, request.url)
}

export default trackPageView
