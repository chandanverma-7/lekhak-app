# AI Usage & Governance Workflow — Lekhak.app

## Overview

This project uses AI-assisted development and AI-powered processing features with a **governance-first approach**. AI is used as an engineering assistant and as a background processing component — never as an unchecked authority.

The AI workflow is designed to be:

* auditable
* reproducible
* privacy-aware
* model-versioned
* human-reviewed

---

## Local AI Development Setup

AI-assisted coding is performed using:

* Ollama (local LLM runtime)
* qwen2.5-coder models
* VS Code Continue extension
* Terminal-based AI interaction

All development AI runs **locally** to ensure:

* no proprietary code leaves the machine
* deterministic model behavior
* reproducible outputs
* privacy-safe development workflow

Example command used:

```
ollama run qwen2.5-coder:1.5b-base
```

---

## AI Responsibilities in This Project

AI is used for:

* TypeScript interface generation
* DTO and schema drafting
* test case generation
* boilerplate scaffolding
* refactoring suggestions
* documentation drafting
* security checklist generation

AI is **not** used for:

* blind copy-paste production code
* security-critical logic without review
* authentication design decisions without validation
* infrastructure configuration without verification

---

## Human Review Policy

All AI-generated code is:

* manually reviewed
* type-checked
* linted
* tested
* security-reviewed
* refactored where needed

No AI output is merged without human validation.

---

## Model Selection Rationale

Coding model used:

```
qwen2.5-coder:1.5b-base
```

Reasons:

* optimized for code generation
* fast local inference
* low resource usage
* suitable for developer assistance
* reproducible behavior

Large models are intentionally avoided for local dev to maintain speed and determinism.

---

## AI Feature Governance (Application Layer)

The Lekhak.app platform itself implements AI governance features:

* job audit logs
* input/output hashing
* model name tracking
* timestamped processing records
* retry + failure tracking
* queue-based processing
* rate limiting
* idempotent job handling

Every AI job is traceable.

---

## Prompt & Output Logging (Planned)

Planned production features include:

* prompt templates with versioning
* structured prompt storage
* output quality scoring
* model version tagging
* reproducibility metadata

---

## Security & Privacy Controls

AI processing pipeline is designed with:

* background queue isolation
* payload validation
* size limits
* PII-safe handling strategy
* audit trail logging
* deletion workflows

---

## Engineering Principle

AI is treated as:

> a productivity amplifier — not a decision authority.

Final system behavior is always controlled by deterministic code and human-reviewed logic.

---

## Hiring Signal Note

This repository demonstrates:

* practical AI-assisted engineering workflow
* local LLM integration
* responsible AI usage patterns
* governance-aware AI architecture
* auditable AI processing design

---
