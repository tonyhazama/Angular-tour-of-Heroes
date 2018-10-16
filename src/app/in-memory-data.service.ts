import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Wind Strom' , class: 'int'},
      { id: 2, name: 'Kali', class: 'int' },
      { id: 3, name: 'Kortana', class: 'int' },
      { id: 4, name: 'Kane', class: 'str' },
      { id: 5, name: 'Geo Sung', class: 'str' },
      { id: 11, name: 'Mr. Nice', class: 'agi' },
      { id: 12, name: 'Narco', class: 'str' },
      { id: 13, name: 'Bombasto', class: 'str' },
      { id: 14, name: 'Celeritas', class: 'int' },
      { id: 15, name: 'Magneta', class: 'int' }
    ];
    return {heroes};
  }
}