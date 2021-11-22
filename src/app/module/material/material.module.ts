import {NgModule} from "@angular/core";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";

const MaterialComponents = [MatTabsModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatToolbarModule];

@NgModule({
	imports: [MaterialComponents],
	exports: [MaterialComponents],
})
export class MaterialModule {
}
