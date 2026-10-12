---
id: ADR-0006
category: component
title: Job Queue
status: accepted
superseded_by: null
component_id: comp_job_queue
responsibility: Decouples API from Worker for asynchronous/background tasks (notifications,
  workflow steps). Runs on Amazon SQS.
kind: managed_service
split_reason: Backing service needed to hand off async work from API to Worker.
evidence: 'Human: ''Amazon SQS as the job queue'''
---

## Context

Human: 'Amazon SQS as the job queue'

## Decision

Decouples API from Worker for asynchronous/background tasks (notifications, workflow steps). Runs on Amazon SQS.

Kept separate because Backing service needed to hand off async work from API to Worker..
