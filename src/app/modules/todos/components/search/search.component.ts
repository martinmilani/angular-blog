import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  id = Number(this.route.snapshot.paramMap.get('id'));
  @Output('select') selectEmmiter = new EventEmitter<string>();
  @Output('selectTaskState') selectTaskStateEmmiter =
    new EventEmitter<string>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.select.valueChanges.subscribe((value) =>
      this.selectEmmiter.emit(value)
    );
    this.selectTaskState.valueChanges.subscribe((value) =>
      this.selectTaskStateEmmiter.emit(value)
    );
  }

  select = new FormControl('');
  selectTaskState = new FormControl('');
}
