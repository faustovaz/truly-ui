/*
    MIT License

    Copyright (c) 2018 Temainfo Software

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { ModalModule } from '../modal';
import { LazyApplicationLoaderConfig } from './configs/application.config';
import { CoreService, APPLICATION_CONFIGURATION } from './services/core.service';
import { TlCore } from './core';

export * from './enums/modal-result';
export * from './enums/key-events';

// @dynamic
export function CoreServiceFactory( coreService: CoreService) {
    return () => coreService.initializeApp();
}

// @dynamic
@NgModule( {
    imports: [
      ModalModule.forRoot()
    ],
    declarations: [
      TlCore,
    ],
    exports: [
      TlCore,
    ],
    entryComponents: [
      TlCore
    ]
} )
export class CoreModule {

    static forRoot( config: LazyApplicationLoaderConfig ): ModuleWithProviders {
      return {
        ngModule: CoreModule,
        providers: [
          CoreService,
          {
            provide: APP_INITIALIZER,
            useFactory: CoreServiceFactory,
            deps: [CoreService],
            multi: true
          },
          {provide: APPLICATION_CONFIGURATION, useValue: Object.assign( new LazyApplicationLoaderConfig(), config  )},
        ]
      };
    }

    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error( 'CoreModule is already loaded. Import it in the AppModule only !!!!!!!!');
        }
    }
}