import { useEffect } from 'react'
import { initPostHog, posthog } from '../lib/posthog'

export default function PostHogInit() {
  useEffect(() => {
    initPostHog()

    // Capture initial pageview
    posthog.capture('$pageview')

    // Capture pageviews on route changes
    const handleRouteChange = () => {
      posthog.capture('$pageview')
    }

    // Listen for Astro's route change events (if using view transitions)
    document.addEventListener('astro:page-load', handleRouteChange)

    return () => {
      document.removeEventListener('astro:page-load', handleRouteChange)
    }
  }, [])

  return null
}
