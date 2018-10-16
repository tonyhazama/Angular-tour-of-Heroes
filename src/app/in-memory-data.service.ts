import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Wind Strom' , color: 'blue'},
      { id: 2, name: 'Kali' },
      { id: 3, name: 'Kortana' },
      { id: 4, name: 'Kane' },
      { id: 5, name: 'Geo Sung' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' }
    ];
    return {heroes};
  }
}