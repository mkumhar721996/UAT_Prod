---
id: ADR-0003
category: component
title: Worker
status: accepted
superseded_by: null
component_id: comp_worker
responsibility: 'Background processing: notifications/alerts dispatch, asynchronous
  workflow steps, scheduled/batch jobs.'
kind: worker
split_reason: Background work (notifications, async workflow steps) has different
  scaling/scheduling needs than request-response API traffic.
talks_to:
- component_id: comp_relational_database
  interaction: shared-storage
  evidence: Worker reads/updates workflow and notification state in the system of
    record
- component_id: comp_job_queue
  interaction: async
  evidence: Worker consumes queued background jobs
evidence: 'Human: core capabilities include ''Notifications and alerts'' and ''Workflow
  and approval processes'''
---

## Context

Human: core capabilities include 'Notifications and alerts' and 'Workflow and approval processes'

## Decision

Background processing: notifications/alerts dispatch, asynchronous workflow steps, scheduled/batch jobs.

Kept separate because Background work (notifications, async workflow steps) has different scaling/scheduling needs than request-response API traffic..

## Talks to

- **Relational Database** (shared-storage) — Worker reads/updates workflow and notification state in the system of record
- **Job Queue** (async) — Worker consumes queued background jobs
