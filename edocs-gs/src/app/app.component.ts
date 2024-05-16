import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'edocs-gs';
  students: Array<any> = [
    {
      "name": "John Doe",
      "city": "New York",
      "country": "USA",
      "age": 25,
      "state": "NY",

    },
    {
      "name": "John Doe",
      "city": "New York",
      "country": "USA",
      "age": 25,
      "state": "NY",

    },
    {
      "name": "John Doe",
      "city": "New York",
      "country": "USA",
      "age": 25,
      "state": "NY",

    },
    {
      "name": "John Doe",
      "city": "New York",
      "country": "USA",
      "age": 25,
      "state": "NY",

    },
    

  ]
  }

export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

export interface SortEvent {
	direction: SortDirection;
}

@Directive({
	selector: 'th[sortable]',
	standalone: true,
	host: {
		'[class.asc]': 'direction === "asc"',
		'[class.desc]': 'direction === "desc"',
		'(click)': 'rotate()',
	},
})
export class NgbdSortableHeader {
	@Input() direction: SortDirection = '';
	@Output() sort = new EventEmitter<SortEvent>();

	rotate() {
		this.direction = rotate[this.direction];
	}
}

// @Component({
// 	selector: 'ngbd-table-sortable',
// 	standalone: true,
// 	imports: [DecimalPipe, NgbdSortableHeader],
// 	templateUrl: './app.component.html',
// })

// export class NgbdTableSortable {
// 	Student = this.Student;

// 	@ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

// 	onSort({ column, direction }: SortEvent) {
// 		// resetting other headers
// 		for (const header of this.headers) {
// 			if (header.sortable !== column) {
// 				header.direction = '';
// 			}
// 		}
//   }
		
// }
