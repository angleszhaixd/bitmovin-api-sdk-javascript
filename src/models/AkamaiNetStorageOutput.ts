import {map} from '../common/Mapper';
import AclEntry from './AclEntry';
import Output from './Output';

/**
 * @export
 * @class AkamaiNetStorageOutput
 */
export class AkamaiNetStorageOutput extends Output {
  /**
   * Host to use for Akamai NetStorage transfers (required)
   * @type {string}
   * @memberof AkamaiNetStorageOutput
   */
  public host: string;

  /**
   * Your Akamai NetStorage Username (required)
   * @type {string}
   * @memberof AkamaiNetStorageOutput
   */
  public username: string;

  /**
   * Your Akamai NetStorage password (required)
   * @type {string}
   * @memberof AkamaiNetStorageOutput
   */
  public password: string;

  constructor(obj: Partial<AkamaiNetStorageOutput>) {
    super(obj);
    this.host = map(obj.host);
    this.username = map(obj.username);
    this.password = map(obj.password);
  }
}

export default AkamaiNetStorageOutput;

