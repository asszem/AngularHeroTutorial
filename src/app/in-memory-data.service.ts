import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroesInMemory = [
      { id: 11, name: 'Mr. Nice', weapon: 'Axe' },
      { id: 12, name: 'Narco', weapon: 'Axe' },
      { id: 13, name: 'Bombasto', weapon: 'Axe' },
      { id: 14, name: 'Celeritas', weapon: 'Axe' },
      { id: 15, name: 'Magneta', weapon: 'Axe' },
      { id: 16, name: 'RubberMan', weapon: 'Axe' },
      { id: 17, name: 'Dynama', weapon: 'Axe' },
      { id: 18, name: 'Dr IQ', weapon: 'Axe' },
      { id: 19, name: 'Magma', weapon: 'Axe' },
      { id: 20, name: 'Tornado', weapon: 'Axe' }
    ];
    return {heroesInMemory};
  }
}
