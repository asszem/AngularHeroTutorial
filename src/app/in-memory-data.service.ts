import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroesInMemory = [
      { id: 11, name: 'Batman', weapon: 'Sword' },
      { id: 12, name: 'Superman', weapon: 'Kriptonite' },
      { id: 13, name: 'Powerman', weapon: 'Power' },
      { id: 14, name: 'Heman', weapon: 'Axe' },
      { id: 15, name: 'X-Man', weapon: 'X-Ray' },
      { id: 16, name: 'Rainman', weapon: 'Thunder' },
      { id: 17, name: 'Methodman', weapon: 'Axe' },
      { id: 18, name: 'Moneyman', weapon: 'Axe' },
      { id: 19, name: 'Megaman', weapon: 'Axe' },
      { id: 20, name: 'Woman', weapon: 'Axe' }
    ];
    return {heroesInMemory};
  }
}
