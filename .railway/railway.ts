import type {
  ProjectDefinition,
  RailwayProvidedVariable,
  ReferencableServiceNode,
} from 'railway/iac'
import { defineRailway, github, project, service } from 'railway/iac'

export default defineRailway((): ProjectDefinition => {
  const web: ReferencableServiceNode<RailwayProvidedVariable> = service('ryanskinner.com', {
    source: github('skiniks/ryanskinner.com', { branch: 'main' }),
    build: {
      builder: 'RAILPACK',
      buildCommand: 'pnpm build',
    },
    start: 'pnpm start',
    healthcheck: '/_rari/health',
    healthcheckTimeout: 300,
    deploy: {
      restartPolicyType: 'ON_FAILURE',
      restartPolicyMaxRetries: 3,
    },
    env: {
      RAILPACK_DEPLOY_APT_PACKAGES: 'libfontconfig1',
    },
  })

  return project('ryanskinner.com', { resources: [web] })
})
