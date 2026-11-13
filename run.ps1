# Usage: .\run.ps1 [-Mode dev|release|preview] [-NpmArgs @('--host', '127.0.0.1')]
param(
    [ValidateSet('dev', 'release', 'prod', 'build', 'preview')]
    [string]$Mode = 'dev',
    [string[]]$NpmArgs
)

Set-Location -LiteralPath $PSScriptRoot

# This static portfolio and its simulated demo do not require .env.
$npmScript = if ($Mode -in 'release', 'prod', 'build') { 'build' } else { $Mode }
npm run $npmScript -- @NpmArgs
exit $LASTEXITCODE
