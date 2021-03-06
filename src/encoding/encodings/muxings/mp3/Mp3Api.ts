import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import InformationApi from './information/InformationApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import Mp3Muxing from '../../../../models/Mp3Muxing';
import PaginationResponse from '../../../../models/PaginationResponse';
import {Mp3MuxingListQueryParams, Mp3MuxingListQueryParamsBuilder} from './Mp3MuxingListQueryParams';

/**
 * Mp3Api - object-oriented interface
 * @export
 * @class Mp3Api
 * @extends {BaseAPI}
 */
export default class Mp3Api extends BaseAPI {
  public customdata: CustomdataApi;
  public information: InformationApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.information = new InformationApi(configuration);
  }

  /**
   * @summary Add MP3 muxing
   * @param {string} encodingId Id of the encoding.
   * @param {Mp3Muxing} mp3Muxing The MP3 muxing to be created
   * @throws {BitmovinError}
   * @memberof Mp3Api
   */
  public create(encodingId: string, mp3Muxing?: Mp3Muxing): Promise<Mp3Muxing> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<Mp3Muxing>('/encoding/encodings/{encoding_id}/muxings/mp3', pathParamMap, mp3Muxing).then((response) => {
      return map(response, Mp3Muxing);
    });
  }

  /**
   * @summary Delete MP3 muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the MP3 muxing
   * @throws {BitmovinError}
   * @memberof Mp3Api
   */
  public delete(encodingId: string, muxingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/mp3/{muxing_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary MP3 muxing details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the MP3 muxing
   * @throws {BitmovinError}
   * @memberof Mp3Api
   */
  public get(encodingId: string, muxingId: string): Promise<Mp3Muxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<Mp3Muxing>('/encoding/encodings/{encoding_id}/muxings/mp3/{muxing_id}', pathParamMap).then((response) => {
      return map(response, Mp3Muxing);
    });
  }

  /**
   * @summary List MP3 muxings
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof Mp3Api
   */
  public list(encodingId: string, queryParameters?: Mp3MuxingListQueryParams | ((q: Mp3MuxingListQueryParamsBuilder) => Mp3MuxingListQueryParamsBuilder)): Promise<PaginationResponse<Mp3Muxing>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: Mp3MuxingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new Mp3MuxingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Mp3Muxing>>('/encoding/encodings/{encoding_id}/muxings/mp3', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Mp3Muxing>(response, Mp3Muxing);
    });
  }
}
