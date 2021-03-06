import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import SccApi from './scc/SccApi';

/**
 * CeaApi - object-oriented interface
 * @export
 * @class CeaApi
 * @extends {BaseAPI}
 */
export default class CeaApi extends BaseAPI {
  public scc: SccApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.scc = new SccApi(configuration);
  }
}
