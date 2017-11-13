import { FilterPipe } from './filter.pipe';
import { Sonnet } from "app/dtos/sonnet.dto";

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('test sonnets filtering', () => {
    const pipe = new FilterPipe();
    let sonnet1: Sonnet = {
      number: '1',
      lines: ['Sonnet1 some line', 'voncalo hostorany malofany mashbera osanant mashtoqaly onboro', 'halofany mastobaly kolomary mashtebaira kousem lomaro', 'esemphelila ombaro']
    };
    let seneet2: Sonnet = {
      number: '2',
      lines: ['Sonnet2 some line', 'voncalo hostorany malofany mashbera osanant mashtoqaly onboro', 'halofany mastobaly kolomary mashtebaira kousem lomaro', 'esemphelila ombaro']
    };
    let seneet3: Sonnet = {
      number: '3',
      lines: ['Sonnet3 some line', 'voncalo hostorany malofany mashbera osanant mashtoqaly onboro', 'halofany mastobaly kolomary mashtebaira kousem lomaro', 'esemphelila ombaro']
    };

    let sonnets = [sonnet1, seneet2, seneet3];
    expect(pipe.transform(sonnets, 'Sonnet1')[0]).toEqual(sonnet1);

  });


  it('test sonnets filtering length', () => {
    const pipe = new FilterPipe();
    let sonnet1: Sonnet = {
      number: '1',
      lines: ['Sonnet1 some line', 'voncalo hostorany malofany mashbera osanant mashtoqaly onboro', 'halofany mastobaly kolomary mashtebaira kousem lomaro', 'esemphelila ombaro']
    };
    let seneet2: Sonnet = {
      number: '2',
      lines: ['Sonnet2 some line', 'voncalo hostorany malofany mashbera osanant mashtoqaly onboro', 'halofany mastobaly kolomary mashtebaira kousem lomaro', 'esemphelila ombaro']
    };
    let seneet3: Sonnet = {
      number: '3',
      lines: ['Sonnet3 some line', 'voncalo hostorany malofany mashbera osanant mashtoqaly onboro', 'halofany mastobaly kolomary mashtebaira kousem lomaro', 'esemphelila ombaro']
    };

    let sonnets = [sonnet1, seneet2, seneet3];
    expect(pipe.transform(sonnets, 'Sonnet1').length).toEqual(1);

  });
});
