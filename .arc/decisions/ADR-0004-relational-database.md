---
id: ADR-0004
category: component
title: Relational Database
status: accepted
superseded_by: null
component_id: comp_relational_database
responsibility: System of record for master data, business records, workflow state,
  and audit trail data. Runs on PostgreSQL (Amazon RDS).
kind: managed_service
split_reason: Backing service the project uses but doesn't build; shared system of
  record for API and Worker.
evidence: 'Human: ''Use PostgreSQL as the primary relational database'''
---

## Context

Human: 'Use PostgreSQL as the primary relational database'

## Decision

System of record for master data, business records, workflow state, and audit trail data. Runs on PostgreSQL (Amazon RDS).

Kept separate because Backing service the project uses but doesn't build; shared system of record for API and Worker..
