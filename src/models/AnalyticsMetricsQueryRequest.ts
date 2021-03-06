import {map, mapArray} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryTimeframe from './AnalyticsQueryTimeframe';

/**
 * @export
 * @class AnalyticsMetricsQueryRequest
 */
export class AnalyticsMetricsQueryRequest extends AnalyticsQueryTimeframe {
  /**
   * Analytics license key (required)
   * @type {string}
   * @memberof AnalyticsMetricsQueryRequest
   */
  public licenseKey?: string;

  /**
   * @type {AnalyticsAbstractFilter[]}
   * @memberof AnalyticsMetricsQueryRequest
   */
  public filters?: AnalyticsAbstractFilter[];

  /**
   * @type {AnalyticsOrderByEntry[]}
   * @memberof AnalyticsMetricsQueryRequest
   */
  public orderBy?: AnalyticsOrderByEntry[];

  /**
   * @type {AnalyticsInterval}
   * @memberof AnalyticsMetricsQueryRequest
   */
  public interval?: AnalyticsInterval;

  /**
   * @type {AnalyticsAttribute[]}
   * @memberof AnalyticsMetricsQueryRequest
   */
  public groupBy?: AnalyticsAttribute[];

  /**
   * Maximum number of rows returned (max. 200)
   * @type {number}
   * @memberof AnalyticsMetricsQueryRequest
   */
  public limit?: number;

  /**
   * Offset of data used for pagination
   * @type {number}
   * @memberof AnalyticsMetricsQueryRequest
   */
  public offset?: number;

  constructor(obj?: Partial<AnalyticsMetricsQueryRequest>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.licenseKey = map(obj.licenseKey);
    this.filters = mapArray(obj.filters, AnalyticsAbstractFilter);
    this.orderBy = mapArray(obj.orderBy, AnalyticsOrderByEntry);
    this.interval = map(obj.interval);
    this.groupBy = mapArray(obj.groupBy);
    this.limit = map(obj.limit);
    this.offset = map(obj.offset);
  }
}

export default AnalyticsMetricsQueryRequest;

