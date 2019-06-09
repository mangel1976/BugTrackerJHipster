import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  BugTrackerJhipsterSharedLibsModule,
  BugTrackerJhipsterSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [BugTrackerJhipsterSharedLibsModule, BugTrackerJhipsterSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [BugTrackerJhipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BugTrackerJhipsterSharedModule {
  static forRoot() {
    return {
      ngModule: BugTrackerJhipsterSharedModule
    };
  }
}
