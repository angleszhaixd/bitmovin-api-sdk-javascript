import {map} from '../common/Mapper';
import Input from './Input';

/**
 * @export
 * @class HttpsInput
 */
export class HttpsInput extends Input {
  constructor(obj: any) {
    super(obj);
    this.host = map(obj.host);
    this.username = map(obj.username);
    this.password = map(obj.password);
    this.port = map(obj.port);
  }

  /**
   * Host Url or IP of the HTTP server
   * @type {string}
   * @memberof HttpsInput
   */
  public host: string;
  /**
   * Basic Auth Username, if required
   * @type {string}
   * @memberof HttpsInput
   */
  public username?: string;
  /**
   * Basic Auth Password, if required
   * @type {string}
   * @memberof HttpsInput
   */
  public password?: string;
  /**
   * Custom Port
   * @type {number}
   * @memberof HttpsInput
   */
  public port?: number;
}

export default HttpsInput;
