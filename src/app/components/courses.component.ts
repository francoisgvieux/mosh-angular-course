import { Component } from "@angular/core";
import { CoursesService } from "../../../services/courses.service";

@Component({
    selector: 'courses',
    template: `
        <p>{{ text | summary:10 }}</p>
    `
})
export class CoursesComponent {
    text = 'asuoihg oasdfj ijadfs guhfdu gfaijdgoi jfdg oisafjgifa jgifojg ijfgigojoa fjgi iijag iofjdg ijf adiojgéa fgjoi ahéhodag oéhf dji ijg ofiéh hgf oifjhi fif if ihfgifd afsofjigoaéfg ahfgeh5oiréhg aofi i !'
}