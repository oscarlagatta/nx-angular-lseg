import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
import { ClassificationScheme } from '../../interfaces/classsification-scheme.interface';

@Component({
  selector: 'lseg-schemes',
  template: `
    <h1>Schemes</h1>
    <div class="mx-auto mt-30px w-80vw">
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead>
            <tr class="bg-blue-500 text-white">
              <th class="py-2 px-4">Scheme</th>
              <th class="py-2 px-4">Name</th>
              <th class="py-2 px-4">Lock</th>
              <th class="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let s of schemes()">
              <td class="border-t px-4 py-2">{{ s.scheme }}</td>
              <td class="border-t px-4 py-2">{{ s.name }}</td>
              <td class="border-t px-4 py-2">{{ s.lock }}</td>
              <td class="border-t px-4 py-2">
                <button
                  class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                  (click)="selectLevel(s.scheme)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </button>
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm0 0h3m-3 0v3m0-3V9"
                    ></path>
                  </svg>
                </button>
                <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [],
})
export class SchemesComponent {
  @Input()
  schemes!: Signal<ClassificationScheme[]>;

  @Output()
  scheme = new EventEmitter<string>();
  selectLevel(scheme: string) {
    this.scheme.emit(scheme);
  }
}
