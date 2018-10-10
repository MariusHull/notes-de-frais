import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const notes = [
        {id: 1, title: 'voiture', amount: 100, currency:'eur'},
        {id: 2, title: 'taxi', amount: 10, currency:'usd'}

    ];
    return {notes};
  }
}