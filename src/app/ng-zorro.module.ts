import { NgModule } from "@angular/core";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzListModule } from "ng-zorro-antd/list";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzProgressModule } from "ng-zorro-antd/progress";
import { NzRadioModule } from "ng-zorro-antd/radio";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzTagModule } from "ng-zorro-antd/tag";

@NgModule({
    exports: [
        NzGridModule,
        NzCardModule,
        NzProgressModule,
        NzRadioModule,
        NzModalModule,
        NzListModule,
        NzTagModule,
        NzTabsModule
    ]
})
export class NgZorroModule { }