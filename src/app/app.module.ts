import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses.component';
import { AuthorsService } from 'services/authors.service';
import { CoursesService } from 'services/courses.service';
import { AuthorsComponent } from './components/authors/authors.component';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './pipes/summary.pipe';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { TextTransformerComponent } from './components/text-transformer/text-transformer.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { LikeBtnComponent } from './components/like-btn/like-btn.component';
import { InputFormatDirective } from './directives/input-format/input-format.directive';
import { ZippyComponent } from './components/zippy/zippy.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent, 
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TextTransformerComponent,
    TitleCasePipe,
    LikeBtnComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
