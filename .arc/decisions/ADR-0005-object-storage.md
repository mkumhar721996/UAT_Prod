---
id: ADR-0005
category: component
title: Object Storage
status: accepted
superseded_by: null
component_id: comp_object_storage
responsibility: Storage for uploaded files and documents (file and document management
  capability). Runs on Amazon S3.
kind: managed_service
split_reason: Backing service the project uses but doesn't build; distinct from structured
  data storage.
evidence: 'Human: ''Amazon S3 for object storage'''
---

## Context

Human: 'Amazon S3 for object storage'

## Decision

Storage for uploaded files and documents (file and document management capability). Runs on Amazon S3.

Kept separate because Backing service the project uses but doesn't build; distinct from structured data storage..
