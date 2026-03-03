---
title: "Changelog March 2026"
description: "Latest updates and improvements to Lumina Lab Agent"
pubDate: "2026-03-03"
author: "CrossMind Team"
tags: ["changelog", "updates", "product"]
draft: false
---

# What's New in Lumina Lab Agent

Here's what we've been working on recently:

## Features

- Remove task_id from artifacts, add refresh button, support video embedding (#143) (`b5c0816`)
- Add copilot session titles from first user message (#137) (`f0a053e`)
- Add magic link authentication for login and signup (#135) (`fd27a95`)
- Improve browser session management and OTLP logging (`65e62b2`)
- Enhance structured output handling in BaseAgent (`03c9a72`)
- Enhance session management with improved LocalBrowserService features (`b13914d`)
- Save browser screenshots as files instead of inline base64 (`489ff87`)
- Implement self-hosted Steel browser service with multi-instance session pool (#134) (`c407385`)
- Add CJK font support, FFmpeg, ImageMagick, and Xvfb to production Docker (#131) (`9db6e99`)
- UI polish improvements - copy reference, autocomplete caching, tree persistence, batch delete (#133) (`7fe3e48`)
- Improve artifact image interactions in Markdown and artifact detail pages (#132) (`c70de37`)
- Agent-initiated Remote Browser capability with user approval (#129) (`8535270`)
- Performance optimization - sidebar caching, render memoization, backend artifact cache (#128) (`486eb2c`)
- Multi-file upload, video playback, and artifact enhancements (#127) (`28afaa4`)
- Update quota limits for free and pro tiers in quota_service.py (`51ed95f`)
- Enhance email session handling with new session ID extraction and embedding (`823c96e`)
- Implement non-blocking row locking for token refresh in credential integrations (`fb7bf8c`)
- Update CommandPalette and TaskDetailsTab for improved scheduling visibility (`c3751db`)
- Add running task indicators to Calendar and LeftPanel (#126) (`ab5438d`)
- Optimize database artifact UI with actions, hide columns, add row dialog, and dashboard view tabs (#125) (`c3ffff8`)
- Add autocomplete to Memo textareas and unify skill insert format (#124) (`7f6ab17`)
- Move Run button from task header to individual schedules, make schedule_id required (#123) (`ebb45cf`)
- Add slash and mention autocomplete for Skills, Tasks, and Artifacts (#121) (`42f9f04`)
- Add 3-minute delay before sending tool authorization emails (#120) (`19bc966`)
- Optimize Twitter, LinkedIn, and database tool cards (#118) (`9eb6fcc`)
- Add Notion-style row detail drawer for database artifacts (#119) (`6c78a8e`)
- Update memo tool functionality and documentation (`0a09c40`)
- Enhance YAML validation for data artifacts (`15b7bdb`)
- Add Emails tab to Agent settings page (`ba6bbd3`)
- Add session_cost_events table for accurate quota window tracking (`2052e4c`)
- Add context menu and enhanced timestamps to artifacts list (#117) (`b18944a`)
- Add admin API, invitation codes, gift subscriptions, and subscription expiry UI (`f56b548`)
- Modernize email templates with brand design & English content (#116) (`717aa5c`)
- Expand Twitter/X tools with reply, engagement, and follow capabilities (#115) (`9d94ba5`)
- Replace all fullscreen loading animations with Prism Assemble loader (#113) (`0a558c0`)
- Artifact-tool-cards with split-panel details viewer (#112) (`8e351a7`)
- Add Telegram integration guidance and onboarding completion email to ONBOARDING.md (#111) (`63f8ff4`)
- Introduce PostHog analytics for comprehensive product tracking (#110) (`04dc223`)
- Update environment configuration for Stripe integration (`927693c`)
- Enhance artifacts with text preview, search, multi-select filters, and improved UX (#107) (`b26874a`)
- Update artifacts detail page footer and action handling (#106) (`2717530`)
- Move Memory page to Agent detail tab and extend CommandPalette search (#105) (`13d8b72`)
- Add expandable schedule prompts with Markdown rendering (#104) (`7e1784b`)
- Add Stripe billing, agent-level subscriptions, quota tier system, and Pro trial (#103) (`ea15b34`)
- Add 5 new Twitter/X tools for complete DM and mentions support (#101) (`13e94c1`)
- Add persistent views for artifact databases (#100) (`5860840`)

## Improvements

- Simplify base agent architecture and remove unused components (#144) (`72f6e19`)
- Unify settings, credentials, and telegram integration system (#140) (`b60ddfc`)
- Clean up Artifacts system architecture - path vs ID-based routing (#138) (`0c72704`)
- Unify ingress queue state and fix conversation ordering/dedup (`cae1a75`)
- Remove template files from agent template artifacts (#114) (`4b073a9`)
- Rebrand Lumina to CrossMind across product display and infrastructure (`4c94744`)

## Bug Fixes

- Interval schedules never firing due to NULL next_run and missing "d" suffix (`e2f745a`)
- Unify email URL configuration and standardize templates (#142) (`144ab26`)
- Feat(docker): expose port 8080 for frontend service in production compose file (`ca9dbc9`)
- Prevent browser session hijack and fix async generator cancellation bug (`d7db861`)
- Browser profile affinity, correct Steel release API, and startup cleanup (`ea8f0e1`)
- Screenshot duplicate images and 404/401 (`f8cd28c`)
- Resolve broken artifact image rendering in Markdown (#130) (`8dcaf0c`)
- Enforce quota on copilot messages and fix PostHog production injection (`8f8cae4`)
- Update nginx upstream from lumina-prod-api to crossmind-prod-api (`3e46213`)
- Calendar month grid display missing dates in last week (#109) (`17198a6`)
- Unify date locale to en-US and fix copilot session turns counting (#108) (`8152cf9`)
- Prevent infinite auto-load loop with offset progress guard (`e1cf1d0`)
- Auto-load history when content too short to scroll after tool collapse (`c2e6d61`)
- Include all tool card types in collapse group when >= 3 tools (`6c7bdd1`)
- Show sender email in email notification card for batched webhook notifications (`43785d0`)
- Add /webhooks/ nginx proxy rule and remove redundant email polling (`addf576`)
- Deduplicate integrations in credential_list and clean up stale records (#102) (`daaa5c9`)
- Auto-refresh OAuth tokens at session start instead of direct decrypt (`cdec186`)
- Prevent pkill from killing claude CLI during MCP cleanup (`08f9d01`)

## Documentation

- Add database optimization plan and benchmark scripts (`c5d4905`)

## Other

- Fix(oauth): stop invalidating integration on 403 (only invalidate on 401) (`c8e3714`)
- Fix(oauth): eliminate race condition in concurrent token refresh (`e59176a`)
- Fix(oauth): improve token refresh resilience and auto-invalidate on auth errors (`3da58a9`)
- Feat(ui): complete UI cleanup - icons, layout, and modal fixes (#141) (`cb1688a`)
- Update uv (`9d3d312`)
- Feat(ui): split agent work status indicators to Calendar and Copilot icons (#139) (`9caaf1b`)
- Feat(ui): redesign sidebar and top navigation (#136) (`896ab8e`)
- Chore(logging): fully remove agent_type from log payloads (`55cfe97`)
- Chore(logging): remove agent_type from logs and add user/tenant/agent context (`41f7cd3`)
- Refine local_browser naming (`ccb8d88`)
- Refactor slots catalog and align tests with current APIs (`1b5ba00`)
- Merge remote main: resolve conflict in base_agent.py (`afa9856`)
- Fix enable request remote browser (`47665e0`)
- Add deferred remote browser approval (`573af4b`)
- Update CLAUDE.md (`122c8b8`)
- 移除 {row_data} 说明与示例 (`9342dc3`)
- Fix memo status lifecycle and clean up dead code (#122) (`1891b58`)
- Style: Update hover styles across dashboard components (`a9248da`)
- Migrate domain from agent.linktion.cn to app.crossmind.io (`5fd8d92`)
- Add cleanup for MCP chrome processes (`92e9761`)
- Fix task delete call parameter (`186360a`)
- Prevent dashboard mobile zoom (`5dd969e`)
- Add HTML email guidance (`015b32a`)


---

*Generated on 2026-03-03 | Total commits: 95*
