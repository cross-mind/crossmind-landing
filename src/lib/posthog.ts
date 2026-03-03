import posthog from 'posthog-js'

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    posthog.init('phc_aim1wLAnBJEwFpo01w8QtkQuwiqsFO9Fa9bYRYvye9Q', {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: false, // We'll manually capture pageviews
      capture_pageleave: true,
      autocapture: true,
      loaded: (posthog) => {
        if (import.meta.env.MODE === 'development') {
          console.log('[PostHog] Initialized in development mode')
        }
      }
    })
  }
}

export { posthog }
