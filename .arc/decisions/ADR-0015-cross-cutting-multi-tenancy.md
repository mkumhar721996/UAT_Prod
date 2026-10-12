---
id: ADR-0015
category: cross_cutting
title: 'Cross-cutting: Multi-tenancy'
status: accepted
superseded_by: null
component_id: null
decision: Shared database with a tenant_id column on tenant-scoped tables (logical
  isolation); all queries must be scoped by tenant.
evidence: 'Human: ''Shared database with a Tenant ID column (logical tenant isolation).'''
---

## Context

Human: 'Shared database with a Tenant ID column (logical tenant isolation).'

## Decision

Shared database with a tenant_id column on tenant-scoped tables (logical isolation); all queries must be scoped by tenant.
