# Release process

The public update feed in `latest-version.txt` must never be advanced before the matching GitHub release has been published.

## Required sequence

1. Prepare and test the release code on a release branch.
2. Ensure the module's internal version matches the intended release version.
3. Create and publish the GitHub release and tag.
4. Do **not** manually edit `latest-version.txt` as part of the release preparation.
5. After the GitHub release is published, the `Protect update feed` workflow updates `latest-version.txt` automatically.
6. Confirm the workflow succeeds before considering the release complete.

The validation job fails if `latest-version.txt` points to a version for which no published GitHub release exists. This protects Custom Module Manager and other update clients from being offered an unavailable version.

## Why this exists

Issues #26 and #40 were caused by the update feed briefly advertising an alpha version before the corresponding GitHub release was available. Even a short mismatch can be cached by update clients and create a broken update path for users.
