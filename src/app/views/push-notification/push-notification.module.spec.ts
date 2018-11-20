import { PushNotificationModule } from './push-notification.module';

describe('PushNotificationModule', () => {
  let pushNotificationModule: PushNotificationModule;

  beforeEach(() => {
    pushNotificationModule = new PushNotificationModule();
  });

  it('should create an instance', () => {
    expect(pushNotificationModule).toBeTruthy();
  });
});
