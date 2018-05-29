import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroesInMemory = [
      { id: 11, name: 'Batman', weapon: 'Axe' },
      { id: 12, name: 'Superman', weapon: 'Axe' },
      { id: 13, name: 'Powerman', weapon: 'Axe' },
      { id: 14, name: 'Heman', weapon: 'Axe' },
      { id: 15, name: 'X-Man', weapon: 'Axe' },
      { id: 16, name: 'Rainman', weapon: 'Axe' },
      { id: 17, name: 'Methodman', weapon: 'Axe' },
      { id: 18, name: 'Moneyman', weapon: 'Axe' },
      { id: 19, name: 'Megaman', weapon: 'Axe' },
      { id: 20, name: 'Woman', weapon: 'Axe' }
    ];
    return {heroesInMemory};
  }
}
