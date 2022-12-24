import * as AudiophileClient from '~/utils/audiophile-client'

export const createPageView = async (sessionId: string, url: string) => {
  const urlObj = new URL(url)
  const body = {
    page_path: urlObj.pathname,
    query_params: urlObj.search
  }

  await AudiophileClient.sendRequest('post', 'page_views', { sessionToken: sessionId, body })
}
