import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import UdpInput from '../../../models/UdpInput';
import PaginationResponse from '../../../models/PaginationResponse';
import {UdpInputListQueryParams, UdpInputListQueryParamsBuilder} from './UdpInputListQueryParams';

/**
 * UdpApi - object-oriented interface
 * @export
 * @class UdpApi
 * @extends {BaseAPI}
 */
export default class UdpApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary UDP Input Details
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof UdpApi
   */
  public get(inputId: string): Promise<UdpInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<UdpInput>('/encoding/inputs/udp/{input_id}', pathParamMap).then((response) => {
      return map(response, UdpInput);
    });
  }

  /**
   * @summary List UDP inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof UdpApi
   */
  public list(queryParameters?: UdpInputListQueryParams | ((q: UdpInputListQueryParamsBuilder) => UdpInputListQueryParamsBuilder)): Promise<PaginationResponse<UdpInput>> {
    let queryParams: UdpInputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new UdpInputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<UdpInput>>('/encoding/inputs/udp', {}, queryParams).then((response) => {
      return new PaginationResponse<UdpInput>(response, UdpInput);
    });
  }
}
