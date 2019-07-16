import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class PlayerChannel
 */
export class PlayerChannel extends BitmovinResponse {
  /**
   * Name of the resource (required)
   * @type {string}
   * @memberof PlayerChannel
   */
  public name?: string;

  constructor(obj: Partial<PlayerChannel>) {
    super(obj);
    this.name = map(obj.name);
  }
}

export default PlayerChannel;

