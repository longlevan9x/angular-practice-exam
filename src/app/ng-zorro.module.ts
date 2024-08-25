import { NgModule } from "@angular/core";
import { NzBackTopModule } from "ng-zorro-antd/back-top";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzListModule } from "ng-zorro-antd/list";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzProgressModule } from "ng-zorro-antd/progress";
import { NzRadioModule } from "ng-zorro-antd/radio";
import { NzSliderModule } from "ng-zorro-antd/slider";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzTimelineModule } from "ng-zorro-antd/timeline";

@NgModule({
    exports: [
        NzGridModule,
        NzCardModule,
        NzProgressModule,
        NzRadioModule,
        NzModalModule,
        NzListModule,
        NzTagModule,
        NzTabsModule,
        NzBackTopModule,
        NzSliderModule,
        NzSwitchModule,
        NzTimelineModule,
        NzCollapseModule
    ]
})
export class NgZorroModule { }