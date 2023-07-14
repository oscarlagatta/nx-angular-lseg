import { Component, Input, Signal } from '@angular/core';
import { ClassificationLevel } from '../../interfaces/classification-level.interface';

@Component({
  selector: 'lseg-levels',
  template: `
    <h1>Levels</h1>
    <div class="mx-auto mt-30px w-80vw">
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead>
            <tr class="bg-blue-500 text-white">
              <th class="py-2 px-4">Level</th>
              <th class="py-2 px-4">Name</th>
              <th class="py-2 px-4">Created</th>
              <th class="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let l of levels()">
              <td class="border-t px-4 py-2">{{ l.level }}</td>
              <td class="border-t px-4 py-2">{{ l.name }}</td>
              <td class="border-t px-4 py-2">{{ l.created }}</td>
              <td class="border-t px-4 py-2">
                <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
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
export class LevelsComponent {
  @Input()
  levels!: Signal<ClassificationLevel[]>;
}
