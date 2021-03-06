import EmailNotification from './EmailNotification';

/**
 * @export
 * @class EncodingErrorEmailNotification
 */
export class EncodingErrorEmailNotification extends EmailNotification {
  constructor(obj?: Partial<EncodingErrorEmailNotification>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default EncodingErrorEmailNotification;

