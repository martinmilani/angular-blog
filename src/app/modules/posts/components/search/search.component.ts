import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  id = Number(this.route.snapshot.paramMap.get('id'));
  @Output('search') searchEmmiter = new EventEmitter<string>();
  @Output('select') selectEmmiter = new EventEmitter<string>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => this.searchEmmiter.emit(value));
    this.select.valueChanges.subscribe((value) =>
      this.selectEmmiter.emit(value)
    );
  }

  search = new FormControl('');
  select = new FormControl('');
}
