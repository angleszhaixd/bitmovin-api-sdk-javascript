import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import UnsharpFilter from '../../../models/UnsharpFilter';
import PaginationResponse from '../../../models/PaginationResponse';
import {UnsharpFilterListQueryParams, UnsharpFilterListQueryParamsBuilder} from './UnsharpFilterListQueryParams';

/**
 * UnsharpApi - object-oriented interface
 * @export
 * @class UnsharpApi
 * @extends {BaseAPI}
 */
export default class UnsharpApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Unsharp Filter
   * @param {UnsharpFilter} unsharpFilter The Unsharp Filter to be created
   * @throws {BitmovinError}
   * @memberof UnsharpApi
   */
  public create(unsharpFilter?: UnsharpFilter): Promise<UnsharpFilter> {
    return this.restClient.post<UnsharpFilter>('/encoding/filters/unsharp', {}, unsharpFilter).then((response) => {
      return map(response, UnsharpFilter);
    });
  }

  /**
   * @summary Delete Unsharp Filter
   * @param {string} filterId Id of the unsharp filter
   * @throws {BitmovinError}
   * @memberof UnsharpApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/unsharp/{filter_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Unsharp Filter Details
   * @param {string} filterId Id of the unsharp filter
   * @throws {BitmovinError}
   * @memberof UnsharpApi
   */
  public get(filterId: string): Promise<UnsharpFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<UnsharpFilter>('/encoding/filters/unsharp/{filter_id}', pathParamMap).then((response) => {
      return map(response, UnsharpFilter);
    });
  }

  /**
   * @summary List Unsharp Filters
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof UnsharpApi
   */
  public list(queryParameters?: UnsharpFilterListQueryParams | ((q: UnsharpFilterListQueryParamsBuilder) => UnsharpFilterListQueryParamsBuilder)): Promise<PaginationResponse<UnsharpFilter>> {
    let queryParams: UnsharpFilterListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new UnsharpFilterListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<UnsharpFilter>>('/encoding/filters/unsharp', {}, queryParams).then((response) => {
      return new PaginationResponse<UnsharpFilter>(response, UnsharpFilter);
    });
  }
}
