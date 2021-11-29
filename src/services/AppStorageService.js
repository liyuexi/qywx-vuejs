import { LocalStorageService } from './LocalStorageService'

export const KEY_API_URL = 'API_URL'
export const KEY_CORP_ID = 'CORP_ID'
export const KEY_AGENT_ID = 'AGENT_ID'
export const KEY_AGENT_SECRET = 'SECRET_ID'


export const AppService = {

  /**
   * @param {Note[]} items
   */
  storeApiUrl (apiUrl) {
    LocalStorageService.setItem(KEY_API_URL, apiUrl)
  },

  /**
   * Fetch  By Id
   */
  getApiUrl () {
    return LocalStorageService.getItem(KEY_API_URL,'')
  },
  
  /**
 * @param {Note[]} items
 */
  storeCorpId (corpId) {
    LocalStorageService.setItem(KEY_CORP_ID, corpId)
  },

  /**
   * Fetch  By Id
   */
  getCorpId () {
    return LocalStorageService.getItem(KEY_CORP_ID,'')
  },


  /**
 * @param {Note[]} items
 */
   storeAgentId (corpId) {
    LocalStorageService.setItem(KEY_AGENT_ID, corpId)
  },

  /**
   * Fetch  By Id
   */
  getAgentId () {
    return LocalStorageService.getItem(KEY_AGENT_ID,'')
  },


  /**
 * @param {Note[]} items
 */
   storeAgentSecret (corpId) {
    LocalStorageService.setItem(KEY_AGENT_SECRET, corpId)
  },

  /**
   * Fetch  By Id
   */
  getAgentSecret () {
    return LocalStorageService.getItem(KEY_AGENT_SECRET,'')
  },
}