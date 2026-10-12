---
id: ADR-0002
category: component
title: API
status: accepted
superseded_by: null
component_id: comp_api
responsibility: 'Core business logic, organized as internal modular domains: authentication/authorization,
  role-based access control, master data CRUD, search/filter/reporting, dashboard/analytics
  queries, audit trails and activity tracking, workflow/approval orchestration, and
  integration with external systems.'
kind: api_service
split_reason: Single unified API with internal modular domain architecture; no separate
  deployable per domain yet.
talks_to:
- component_id: comp_relational_database
  interaction: shared-storage
  evidence: Master data/CRUD capabilities require a system of record
- component_id: comp_job_queue
  interaction: async
  evidence: API enqueues notifications/workflow steps for async processing
- component_id: comp_object_storage
  interaction: sync
  evidence: "File and document management capability \u2014 API handles upload/download"
- component_id: comp_identity_provider
  interaction: sync
  evidence: API validates tokens/credentials against the identity provider
evidence: 'Human: ''Start with a single unified API and modular domain architecture
  internally.'''
---

## Context

Human: 'Start with a single unified API and modular domain architecture internally.'

## Decision

Core business logic, organized as internal modular domains: authentication/authorization, role-based access control, master data CRUD, search/filter/reporting, dashboard/analytics queries, audit trails and activity tracking, workflow/approval orchestration, and integration with external systems.

Kept separate because Single unified API with internal modular domain architecture; no separate deployable per domain yet..

## Talks to

- **Relational Database** (shared-storage) — Master data/CRUD capabilities require a system of record
- **Job Queue** (async) — API enqueues notifications/workflow steps for async processing
- **Object Storage** (sync) — File and document management capability — API handles upload/download
- **Identity Provider** (sync) — API validates tokens/credentials against the identity provider
