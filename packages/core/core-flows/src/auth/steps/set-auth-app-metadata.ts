import { createStep, StepResponse } from "@medusajs/workflows-sdk"

import { IAuthModuleService } from "@medusajs/types"
import { isDefined, ModuleRegistrationName } from "@medusajs/utils"

export type SetAuthAppMetadataStepInput = {
  authIdentityId: string
  actorType: string
  value: string
}

export const setAuthAppMetadataStepId = "set-auth-app-metadata"
/**
 * This step sets the `app_metadata` property of an auth identity.
 */
export const setAuthAppMetadataStep = createStep(
  setAuthAppMetadataStepId,
  async (data: SetAuthAppMetadataStepInput, { container }) => {
    const service = container.resolve<IAuthModuleService>(
      ModuleRegistrationName.AUTH
    )

    const key = `${data.actorType}_id`
    const authIdentity = await service.retrieveAuthIdentity(data.authIdentityId)

    const appMetadata = authIdentity.app_metadata || {}
    if (isDefined(appMetadata[key])) {
      throw new Error(`Key ${key} already exists in app metadata`)
    }

    appMetadata[key] = data.value

    await service.updateAuthIdentities({
      id: authIdentity.id,
      app_metadata: appMetadata,
    })

    return new StepResponse(authIdentity, {
      id: authIdentity.id,
      key: key,
    })
  },
  async (idAndKey, { container }) => {
    if (!idAndKey) {
      return
    }

    const { id, key } = idAndKey

    const service = container.resolve<IAuthModuleService>(
      ModuleRegistrationName.AUTH
    )

    const authIdentity = await service.retrieveAuthIdentity(id)

    const appMetadata = authIdentity.app_metadata || {}
    if (isDefined(appMetadata[key])) {
      delete appMetadata[key]
    }

    await service.updateAuthIdentities({
      id: authIdentity.id,
      app_metadata: appMetadata,
    })
  }
)
