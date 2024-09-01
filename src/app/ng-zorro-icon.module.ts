import { NgModule } from "@angular/core";
import { NzIconModule, NZ_ICONS } from "ng-zorro-antd/icon";
import {
    ArrowLeftOutline,
    QuestionCircleOutline,
    FieldTimeOutline,
    StarOutline,
    RightOutline,
    LeftOutline,
    UnorderedListOutline,
    RocketOutline,
    AimOutline,
    BookOutline,
    HistoryOutline,
    BookFill,
} from '@ant-design/icons-angular/icons';

const icons = [
    ArrowLeftOutline,
    QuestionCircleOutline,
    FieldTimeOutline,
    StarOutline,
    RightOutline,
    LeftOutline,
    UnorderedListOutline,
    RocketOutline,
    AimOutline,
    BookOutline,
    HistoryOutline,
    BookFill,
];

@NgModule({
    imports: [NzIconModule],
    exports: [NzIconModule],
    providers: [{ provide: NZ_ICONS, useValue: icons }],
})
export class NgZorroIconModule { }
