import { NgModule } from '@angular/core';
import { PaginatePipe } from './paginate.pipe';
import { FilterPipe } from './filter.pipe';
import { SearchPipe } from './search.pipe';
import { StatefilterPipe } from './statefilter.pipe';

@NgModule({
  declarations: [PaginatePipe, FilterPipe, SearchPipe, StatefilterPipe],
  exports: [PaginatePipe, FilterPipe, SearchPipe, StatefilterPipe],
})
export class PipesModule {}
