# PostHog Integration

**Status:** ✅ Integrated and Active

## Configuration

**API Key:** `phc_aim1wLAnBJEwFpo01w8QtkQuwiqsFO9Fa9bYRYvye9Q`
**Host:** `https://us.i.posthog.com`

## Implementation

PostHog is integrated into the landing page via:

1. **`src/lib/posthog.ts`**: PostHog initialization with configuration
2. **`src/components/PostHogInit.tsx`**: React component for client-side tracking
3. **`src/layouts/Layout.astro`**: Includes PostHogInit component on all pages

## Features Enabled

- ✅ **Pageview tracking**: Automatically captures pageviews on initial load and route changes
- ✅ **Autocapture**: Captures clicks, form submissions, and interactions automatically
- ✅ **Page leave tracking**: Tracks when users leave pages
- ✅ **Person profiles**: Identified users only (GDPR-friendly)

## What Gets Tracked

### Automatic Events:
- Pageviews (`$pageview`)
- Page leaves (`$pageleave`)
- Button clicks
- Link clicks
- Form submissions
- Form field interactions

### Custom Events (can be added):
```typescript
import { posthog } from '../lib/posthog'

// Track custom events
posthog.capture('waitlist_signup', {
  email: user.email,
  source: 'homepage'
})

// Identify users
posthog.identify(userId, {
  email: user.email,
  name: user.name
})
```

## Verification

1. **Build successful**: PostHog bundle included (~180KB gzipped to 59KB)
2. **Pages tracked**: All pages using Layout.astro (homepage, blog, etc.)
3. **Console logging**: Development mode logs PostHog initialization

## Dashboard Access

PostHog dashboard: https://us.posthog.com
(Login with credentials that have access to project using this API key)

## Privacy Considerations

- **Person profiles**: Set to `identified_only` (only tracks identified users in detail)
- **IP anonymization**: Consider enabling in PostHog dashboard if needed
- **Cookie consent**: Consider adding cookie consent banner if targeting EU users

## Performance

- PostHog script loads asynchronously
- Minimal performance impact
- Gzipped bundle: ~59KB

## Next Steps (Optional)

1. **Add custom events** for key actions (waitlist signup, CTA clicks, etc.)
2. **Set up funnels** in PostHog dashboard (visitor → waitlist → signup)
3. **Create feature flags** for A/B testing
4. **Add session recordings** (enable in PostHog dashboard)
5. **Set up alerts** for traffic spikes or errors
