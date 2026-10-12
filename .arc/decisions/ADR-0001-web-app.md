---
id: ADR-0001
category: component
title: Web App
status: accepted
superseded_by: null
component_id: comp_web_app
responsibility: 'Browser-based UI for administrators, internal business users, managers
  and end users: CRUD on business records, search/filter, dashboards, notifications
  display, file upload/download, and workflow/approval screens.'
kind: web_ui
split_reason: "Different runtime/client than the API \u2014 browser-facing UI vs backend\
  \ logic."
talks_to:
- component_id: comp_api
  interaction: sync
  evidence: 'Human: ''API-driven'' architecture; Web App is the browser client to
    the API'
- component_id: comp_identity_provider
  interaction: sync
  evidence: Login/auth flows go through the identity provider (OIDC)
evidence: 'Human: ''generic business web application platform...Primary Users: Administrators,
  Internal business users, Managers, End users'''
---

## Context

Human: 'generic business web application platform...Primary Users: Administrators, Internal business users, Managers, End users'

## Decision

Browser-based UI for administrators, internal business users, managers and end users: CRUD on business records, search/filter, dashboards, notifications display, file upload/download, and workflow/approval screens.

Kept separate because Different runtime/client than the API — browser-facing UI vs backend logic..

## Talks to

- **API** (sync) — Human: 'API-driven' architecture; Web App is the browser client to the API
- **Identity Provider** (sync) — Login/auth flows go through the identity provider (OIDC)
