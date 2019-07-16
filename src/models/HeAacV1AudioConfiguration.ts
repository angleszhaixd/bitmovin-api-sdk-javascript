import {map} from '../common/Mapper';
import AacChannelLayout from './AacChannelLayout';
import AudioConfiguration from './AudioConfiguration';

/**
 * @export
 * @class HeAacV1AudioConfiguration
 */
export class HeAacV1AudioConfiguration extends AudioConfiguration {
  /**
   * Channel layout of the audio codec configuration
   * @type {AacChannelLayout}
   * @memberof HeAacV1AudioConfiguration
   */
  public channelLayout?: AacChannelLayout;

  constructor(obj: Partial<HeAacV1AudioConfiguration>) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
  }
}

export default HeAacV1AudioConfiguration;

