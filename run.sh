#!/bin/bash
# Usage: ./run.sh [dev|release|preview] [npm script arguments]
set -euo pipefail

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd "$SCRIPT_DIR"

# This static portfolio and its simulated demo do not require .env.
MODE="${1:-dev}"
shift || true

case "$MODE" in
  release|prod|build)
    npm run build -- "$@"
    ;;
  *)
    npm run "$MODE" -- "$@"
    ;;
esac
