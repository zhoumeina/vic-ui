/*
 Copyright 2017 VMware, Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { APP_CONFIG } from './shared/index';
import { AppRoutingComponent } from './app-routing.component';

const appRoutes: Routes = [
    { path: 'index.html', component: AppRoutingComponent },
    { path: 'portlet', loadChildren: './summary-portlet/summary-portlet.module#VicSummaryPortletModule' },
    { path: 'summary-view', loadChildren: './summary-view/summary-view.module#VicSummaryViewModule' },
    { path: 'vch-view', loadChildren: './vch-view/vch-view.module#VicVchViewModule' },
    { path: 'container-view', loadChildren: './container-view/container-view.module#VicContainerViewModule' },
    { path: 'create-vch', loadChildren: './create-vch-wizard/create-vch-wizard.module#CreateVchWizardModule' },
    { path: 'delete-vch', loadChildren: './delete-vch-modal/delete-vch-modal.module#DeleteVchModalModule' },
    { path: 'ui-actions', loadChildren: './ui-actions/ui-actions.module#UiActionsModule' },
    {
      path: 'configure-vch-view-general',
      loadChildren: './configure/configure-vch-view/general/configure-vch-view-general.module#ConfigureVchViewGeneralModule'
    },
    {
      path: 'configure-vch-view-compute',
      loadChildren: './configure/configure-vch-view/compute/configure-vch-view-compute.module#ConfigureVchViewComputeModule'
    },
    {
      path: 'configure-vch-view-network',
      loadChildren: './configure/configure-vch-view/network/configure-vch-view-network.module#ConfigureVchViewNetworkModule'
    },
    {
      path: 'configure-vch-view-operations',
      loadChildren: './configure/configure-vch-view/operations/configure-vch-view-operations.module#ConfigureVchViewOperationsModule'
    },
    {
      path: 'configure-vch-view-registry',
      loadChildren: './configure/configure-vch-view/registry/configure-vch-view-registry.module#ConfigureVchViewRegistryModule'
    },
    {
      path: 'configure-vch-view-security',
      loadChildren: './configure/configure-vch-view/security/configure-vch-view-security.module#ConfigureVchViewSecurityModule'
    },
    {
      path: 'configure-vch-view-storage',
      loadChildren: './configure/configure-vch-view/storage/configure-vch-view-storage.module#ConfigureVchViewStorageModule'
    },
    {
      path: 'configure-vch-modal-general',
      loadChildren: './configure/configure-vch-modal/general/configure-vch-modal-general.module#ConfigureVchModalGeneralModule'
    },
    {
      path: 'configure-vch-modal-compute',
      loadChildren: './configure/configure-vch-modal/compute/configure-vch-modal-compute.module#ConfigureVchModalComputeModule'
    },
    {
      path: 'configure-vch-modal-storage',
      loadChildren: './configure/configure-vch-modal/storage/configure-vch-modal-storage.module#ConfigureVchModalStorageModule'
    },
    {
      path: 'configure-vch-modal-network',
      loadChildren: './configure/configure-vch-modal/network/configure-vch-modal-network.module#ConfigureVchModalNetworkModule'
    },
    {
      path: 'configure-vch-modal-security',
      loadChildren: './configure/configure-vch-modal/security/configure-vch-modal-security.module#ConfigureVchModalSecurityModule'
    }
];

export const extensionToRoutes = {};
extensionToRoutes[APP_CONFIG.packageName + '.objectView.summaryView'] = '/objectViewSummary';
extensionToRoutes[APP_CONFIG.packageName + '.objectView.monitorView'] = '/objectViewMonitor';
extensionToRoutes[APP_CONFIG.packageName + '.objectView.vchView'] = '/objectViewVch';
extensionToRoutes[APP_CONFIG.packageName + '.objectView.containerView'] = '/objectViewContainer';

export const routedComponents = [AppRoutingComponent];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
