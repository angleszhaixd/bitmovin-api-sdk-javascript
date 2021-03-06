import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import InsertableContentApi from './insertableContent/InsertableContentApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import LiveEncoding from '../../../models/LiveEncoding';
import StartLiveEncodingRequest from '../../../models/StartLiveEncodingRequest';

/**
 * LiveApi - object-oriented interface
 * @export
 * @class LiveApi
 * @extends {BaseAPI}
 */
export default class LiveApi extends BaseAPI {
  public insertableContent: InsertableContentApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.insertableContent = new InsertableContentApi(configuration);
  }

  /**
   * @summary Live Encoding Details
   * @param {string} encodingId Id of the encoding.
   * @throws {BitmovinError}
   * @memberof LiveApi
   */
  public get(encodingId: string): Promise<LiveEncoding> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<LiveEncoding>('/encoding/encodings/{encoding_id}/live', pathParamMap).then((response) => {
      return map(response, LiveEncoding);
    });
  }

  /**
   * @summary Live Encoding Start Details
   * @param {string} encodingId Id of the encoding
   * @throws {BitmovinError}
   * @memberof LiveApi
   */
  public getStartRequest(encodingId: string): Promise<StartLiveEncodingRequest> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<StartLiveEncodingRequest>('/encoding/encodings/{encoding_id}/live/start', pathParamMap).then((response) => {
      return map(response, StartLiveEncodingRequest);
    });
  }

  /**
   * @summary Re-Start Live Encoding
   * @param {string} encodingId Id of the encoding
   * @throws {BitmovinError}
   * @memberof LiveApi
   */
  public restart(encodingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/encodings/{encoding_id}/live/restart', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Start Live Encoding
   * @param {string} encodingId Id of the encoding
   * @param {StartLiveEncodingRequest} startLiveEncodingRequest Live Encoding startup options
   * @throws {BitmovinError}
   * @memberof LiveApi
   */
  public start(encodingId: string, startLiveEncodingRequest?: StartLiveEncodingRequest): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/encodings/{encoding_id}/live/start', pathParamMap, startLiveEncodingRequest).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Stop Live Encoding
   * @param {string} encodingId Id of the encoding
   * @throws {BitmovinError}
   * @memberof LiveApi
   */
  public stop(encodingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/encodings/{encoding_id}/live/stop', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }
}
