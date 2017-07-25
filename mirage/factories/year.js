
import Mirage, { faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  nodes(i) {
    return faker.list.cycle(1, 2, 3, 4, 5)(i);
  },
  site(i) {
    return faker.list.random(10, 20, 30, 40, 50)(i);
  },
  size(i) {
    return faker.list.random(100, 200, 300, 400, 500)(i);
  },
  year(i) {
    return (1990 + i);
  }
});