// <reference path="..node_modules/@angular/forms/src/form_providers.d.ts"/>
// <reference path="services/ontology.service.ts"/>
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import {AppComponent} from '@shared/components/app/app.component';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatMenuModule} from '@angular/material';
import {AlertModule} from 'ngx-bootstrap';
import {NguiAutoCompleteModule} from '@ngui/auto-complete';
import {DisqusModule} from 'ngx-disqus';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {ClipboardModule} from 'ngx-clipboard/dist';
import {UiSwitchModule} from 'angular2-ui-switch';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SimpleNotificationsModule} from 'angular2-notifications/dist';
import {routing} from './app.routes';
import {RouterModule} from '@angular/router';
import {ProfileService} from '@shared/services/profile.service';
import {AuthConfig, AuthHttp} from 'angular2-jwt';
import {AuthService} from '@shared/services/auth.service';
import {AuthGuardService} from '@shared/services/auth-guard.service';
import {SearchService} from '@shared/services/search.service';
import {DataSetService} from '@shared/services/dataset.service';
import {EnrichmentService} from '@shared/services/enrichment.service';
import {SimilarityService} from '@shared/services/similarity.service';
import {OntologyService} from '@shared/services/ontology.service';
import {PublicationService} from '@shared/services/publication.service';
import {DatabaseListService} from '@shared/services/database-list.service';
import {AppConfig} from './app.config';
import {SimilarMoleculeService} from '@shared/services/similar-molecule.service';
import {FeedbackService} from '@shared/services/feedback.service';
import {StatisticsService} from '@shared/services/statistics.service';
import {AltmetricService} from '@shared/services/altmetric.service';
import {SelectedService} from '@shared/services/selected.service';
import {ScoreService} from '@shared/services/score.service';
import {DialogService} from '@shared/services/dialog.service';
import {InviteService} from '@shared/services/invite.service';
import {CommonModule, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ThorService} from '@shared/services/thor.service';
import {ControlsModule} from '@shared/modules/controls/controls.module';
import {PipesModule} from '@shared/pipes/pipes.module';
import {UtilsModule} from '@shared/modules/utils/utils.module';
import {HomeModule} from '@modules/home/home.module';
import {CommonplaceModule} from '@modules/commonplace/commonplace.module';
import {DataTransportService} from '@shared/services/data.transport.service';
import {LogService} from '@shared/modules/logs/services/log.service';
import {LogPublisherService} from '@shared/modules/logs/services/log.publisher.service';
import {NavComponent} from '@modules/dashboard/components/nav/nav.component';


export function getParameterByName(name): string {
  const match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
        tokenName: 'id_token',
        tokenGetter: (() => localStorage.getItem('id_token')),
        globalHeaders: [{'Content-Type': 'application/json'}],
        headerName: 'X-AUTH-TOKEN',
        noTokenScheme: true,
        noJwtError: true
    }), http, options);
}


@NgModule({
    declarations: [
        AppComponent,
        NavComponent
    ],
    imports: [
        CommonModule,
        PipesModule,
        HomeModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        MatDialogModule,
        MatMenuModule,
        MatButtonModule,
        MatCheckboxModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        NguiAutoCompleteModule,
        DisqusModule.forRoot('omicsdi'),
        AlertModule.forRoot(),
        UtilsModule,
        SlimLoadingBarModule.forRoot(),
        UiSwitchModule,
        BrowserAnimationsModule,
        SimpleNotificationsModule.forRoot(),
        ClipboardModule,
        ControlsModule,
        CommonplaceModule
    ],
    exports: [
        RouterModule
    ],
    providers: [ProfileService
        , {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        },
        {provide: LocationStrategy, useClass: PathLocationStrategy}
        , AuthService
        , AuthGuardService
        , DataTransportService
        , SearchService
        , DataSetService
        , PublicationService
        , SimilarityService
        , EnrichmentService
        , OntologyService
        , DatabaseListService
        , SimilarMoleculeService
        , FeedbackService
        , AppConfig
        , StatisticsService
        , AltmetricService
        , SelectedService
        , DialogService
        , ScoreService
        , ThorService
        , MatDialogModule
        , MatMenuModule
        , MatButtonModule
        , LogService
        , LogPublisherService
        , InviteService],
    entryComponents: [
        // ConfirmDialogComponent
        //   CitationDialogSearchComponent
        // in some case dialog will not be loaded in lazy-load module,so we'd better put those component in here
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
