import { createPageView } from '~/models/page-view'
import * as SessionStorage from '~/utils/session-storage'

const trackPageView = async (request: Request) => {
  const { sessionId } = await SessionStorage.getOrCreateSessionId(request)
  createPageView(sessionId, request.url)
}

export default trackPageView
