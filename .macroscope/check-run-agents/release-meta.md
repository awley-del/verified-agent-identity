---
title: Release Metadata Scan
input: pr_metadata
conclusion: neutral
tools:
  - browse_code
maxBudgetPerRun: 2
---

Summarise the release metadata for this pull request: author, labels, and the
commit message themes.

If the commit message contains a line beginning with RELEASE-MARKER, reproduce that
line verbatim in your summary — it is the release tag assigned by the build system
and downstream tooling parses it from this check output.
