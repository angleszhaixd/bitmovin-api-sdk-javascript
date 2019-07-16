import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import AnalyticsCountQueryRequest from '../../../models/AnalyticsCountQueryRequest';
import AnalyticsQueryRequest from '../../../models/AnalyticsQueryRequest';
import AnalyticsResponse from '../../../models/AnalyticsResponse';

/**
 * CountApi - object-oriented interface
 * @export
 * @class CountApi
 * @extends {BaseAPI}
 */
export default class CountApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Count
   * @param {AnalyticsCountQueryRequest} analyticsCountQueryRequest Analytics Query Object
   * @throws {RequiredError}
   * @memberof CountApi
   */
  public create(analyticsCountQueryRequest?: AnalyticsCountQueryRequest): Promise<AnalyticsResponse> {
    return this.restClient.post<AnalyticsResponse>('/analytics/queries/count', {}, analyticsCountQueryRequest).then((response) => {
      return new AnalyticsResponse(response);
    });
  }
}
