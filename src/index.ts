import { ComponentSettings, Manager, MCEvent } from '@managed-components/types'
import UAParser from 'ua-parser-js'

export const eventHandler = async (
  eventType: string,
  event: MCEvent,
  settings: ComponentSettings
) => {
  const { payload, client } = event

  const endpoint = 'https://api.segment.io/v1/' + eventType
  const { writeKey } = settings

  // Prepare new payload
  const uaParser = new UAParser(client.userAgent).getResult()
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const segmentPayload: any = {
    callType: eventType,
    anonymousId: payload.anonymousId,
    userId: payload.userId,
    context: {
      ip: client.ip,
      locale: client.language,
      page: {
        url: client.url.href,
        title: client.title,
        referrer: client.referer,
        path: client.url.pathname,
        search: client.url.search,
      },
      screen: {
        width: client.screenWidth,
        height: client.screenHeight,
      },
      os: { name: uaParser.os.name },
      userAgent: uaParser.ua,
    },
  }

  if (eventType === 'identify' || eventType === 'group') {
    segmentPayload.traits = payload
  } else {
    segmentPayload.properties = payload
  }

  if (eventType === 'page') {
    segmentPayload.properties = {
      ...segmentPayload.properties,
      ...segmentPayload.context.page,
    }
  }

  // If we don't have anonymousId, try to get it from the cookie
  if (!segmentPayload.anonymousId && client.get('ajs_anonymous_id')) {
    segmentPayload.anonymousId = client.get('ajs_anonymous_id')
  }

  // If both userid and anonymousId are missing, generate one
  if (!segmentPayload.userId && !segmentPayload.anonymousId) {
    const anonId = crypto.randomUUID()
    segmentPayload.anonymousId = anonId
    client.set('ajs_anonymous_id', anonId, {
      scope: 'infinite',
    })
  }

  // Send the request
  const headers = {
    Authorization: 'Basic ' + btoa(writeKey),
    'Content-Type': 'application/json',
  }

  fetch(endpoint, {
    headers,
    method: 'POST',
    body: JSON.stringify(segmentPayload),
  })
}

export default async function (manager: Manager, settings: ComponentSettings) {
  manager.addEventListener('pageview', event => {
    eventHandler('page', event, settings)
  })
  manager.addEventListener('track', event => {
    eventHandler('track', event, settings)
  })
  manager.addEventListener('identify', event => {
    eventHandler('identify', event, settings)
  })
  manager.addEventListener('alias', event => {
    eventHandler('alias', event, settings)
  })
  manager.addEventListener('group', event => {
    eventHandler('group', event, settings)
  })
}
