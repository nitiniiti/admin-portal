import { ProjectComponentsModule } from './components.module';

describe('ProjectComponentsModule', () => {
  let projectComponentsModule: ProjectComponentsModule;

  beforeEach(() => {
    projectComponentsModule = new ProjectComponentsModule();
  });

  it('should create an instance', () => {
    expect(projectComponentsModule).toBeTruthy();
  });
});
