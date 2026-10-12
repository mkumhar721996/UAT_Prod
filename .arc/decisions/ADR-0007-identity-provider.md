---
id: ADR-0007
category: component
title: Identity Provider
status: accepted
superseded_by: null
component_id: comp_identity_provider
responsibility: Authentication and identity management, delegated to Amazon Cognito
  by default; supports future enterprise identity federation (Okta, Microsoft Entra
  ID) via standard OIDC/SAML.
kind: managed_service
split_reason: "Security/compliance boundary \u2014 authentication delegated to a managed\
  \ identity provider rather than built in-house."
evidence: 'Human: ''Authentication and identity management should be delegated to
  a managed identity provider... Amazon Cognito should be the default choice... while
  allowing future support for enterprise identity providers such as Okta and Microsoft
  Entra ID through standard OIDC/SAML integration'''
---

## Context

Human: 'Authentication and identity management should be delegated to a managed identity provider... Amazon Cognito should be the default choice... while allowing future support for enterprise identity providers such as Okta and Microsoft Entra ID through standard OIDC/SAML integration'

## Decision

Authentication and identity management, delegated to Amazon Cognito by default; supports future enterprise identity federation (Okta, Microsoft Entra ID) via standard OIDC/SAML.

Kept separate because Security/compliance boundary — authentication delegated to a managed identity provider rather than built in-house..
