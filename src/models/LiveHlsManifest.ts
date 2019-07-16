import {map} from '../common/Mapper';

/**
 * @export
 * @class LiveHlsManifest
 */
export class LiveHlsManifest {
  /**
   * Hls manifest ids (required)
   * @type {string}
   * @memberof LiveHlsManifest
   */
  public manifestId: string;

  /**
   * Timeshift in seconds
   * @type {number}
   * @memberof LiveHlsManifest
   */
  public timeshift?: number;

  /**
   * Live edge offset in seconds
   * @type {number}
   * @memberof LiveHlsManifest
   */
  public liveEdgeOffset?: number;

  /**
   * Specifies if the EXT-X-PROGRAM-DATETIME tag will be included
   * @type {boolean}
   * @memberof LiveHlsManifest
   */
  public insertProgramDateTime?: boolean;

  constructor(obj: Partial<LiveHlsManifest>) {
    this.manifestId = map(obj.manifestId);
    this.timeshift = map(obj.timeshift);
    this.liveEdgeOffset = map(obj.liveEdgeOffset);
    this.insertProgramDateTime = map(obj.insertProgramDateTime);
  }
}

export default LiveHlsManifest;

