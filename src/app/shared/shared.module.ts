import { ModuleWithProviders, NgModule } from '@angular/core';
import { ServicesDeclaration } from '../services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  exports: [HttpClientModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        ...ServicesDeclaration,
      ]
    }
  }
}