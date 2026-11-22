---
requires:
  - release-gate-attestation
waitsFor:
  - release-gate-attestation
waitsForDiscoveryTimeout: 1
waitsForTimeout: 1
---

Dependency rendering follows the repository's release gate.
