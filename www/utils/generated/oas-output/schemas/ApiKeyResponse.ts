/**
 * @schema ApiKeyResponse
 * type: object
 * description: The api key's details.
 * x-schemaName: ApiKeyResponse
 * required:
 *   - id
 *   - token
 *   - redacted
 *   - title
 *   - type
 *   - last_used_at
 *   - created_by
 *   - created_at
 *   - revoked_by
 *   - revoked_at
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The api key's ID.
 *   token:
 *     type: string
 *     title: token
 *     description: The api key's token.
 *   redacted:
 *     type: string
 *     title: redacted
 *     description: The api key's redacted.
 *   title:
 *     type: string
 *     title: title
 *     description: The api key's title.
 *   type:
 *     type: string
 *     enum:
 *       - secret
 *       - publishable
 *   last_used_at:
 *     type: string
 *     title: last_used_at
 *     description: The api key's last used at.
 *     format: date-time
 *   created_by:
 *     type: string
 *     title: created_by
 *     description: The api key's created by.
 *   created_at:
 *     type: string
 *     title: created_at
 *     description: The api key's created at.
 *     format: date-time
 *   revoked_by:
 *     type: string
 *     title: revoked_by
 *     description: The api key's revoked by.
 *   revoked_at:
 *     type: string
 *     title: revoked_at
 *     description: The api key's revoked at.
 *     format: date-time
 * 
*/

