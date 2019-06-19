import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import StreamInfos from '../../../../../models/StreamInfos';
import PaginationResponse from '../../../../../models/PaginationResponse';
import StreamInfosListQueryParams from './StreamInfosListQueryParams';

/**
 * StreamsApi - object-oriented interface
 * @export
 * @class StreamsApi
 * @extends {BaseAPI}
 */
export default class StreamsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List Stream Infos of Live Statistics from an Encoding
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof StreamsApi
   */
  public list(encodingId: string, queryParams?: StreamInfosListQueryParams): Promise<PaginationResponse<StreamInfos>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<PaginationResponse<StreamInfos>>('/encoding/statistics/encodings/{encoding_id}/live-statistics/streams', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<StreamInfos>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new StreamInfos(i));
      }
      return paginationResponse;
    });
  }
}