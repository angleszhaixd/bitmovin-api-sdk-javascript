import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import MuxingType from './MuxingType';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class ProgressiveWebmMuxing
 */
export class ProgressiveWebmMuxing extends Muxing {
  /**
   * Discriminator property for Muxing
   * @type {string}
   * @memberof ProgressiveWebmMuxing
   */
  public type: MuxingType.PROGRESSIVE_WEBM = MuxingType.PROGRESSIVE_WEBM;

  /**
   * Name of the new Video
   * @type {string}
   * @memberof ProgressiveWebmMuxing
   */
  public filename?: string;

  constructor(obj?: Partial<ProgressiveWebmMuxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.filename = map(obj.filename);
  }
}

export default ProgressiveWebmMuxing;

