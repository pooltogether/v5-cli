export function createExitCode(error:any, _this: any): any {
  const e = error as any
  switch (e?.code) {
  case 'PROVIDER_ERROR':
  case 'NETWORK_ERROR':
    _this.exit(42)
    break
  case 'INVALID_PRIZE_SCHEMA':
  default:
    _this.exit(1)
    break
  }

  throw error
}

