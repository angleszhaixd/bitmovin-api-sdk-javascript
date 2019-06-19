import {map} from '../common/Mapper';
import CodecConfigType from './CodecConfigType';

/**
 * @export
 * @class CodecConfigTypeResponse
 */
export class CodecConfigTypeResponse {
  constructor(obj: any) {
    this.type = map(obj.type);
  }

  /**
   * The type of the codec config
   * @type {CodecConfigType}
   * @memberof CodecConfigTypeResponse
   */
  public type?: CodecConfigType;
}

export default CodecConfigTypeResponse;
