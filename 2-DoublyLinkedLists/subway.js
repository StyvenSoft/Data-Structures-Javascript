const DoublyLinkedList = require('./1-DoubleLinked');

const subway = new DoublyLinkedList();

subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');
subway.printList();

subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');
subway.printList();

subway.removeHead();
subway.removeTail();
subway.printList();

subway.removeByData('TimesSquare');
subway.printList();

{/* <head> CentralPark GrandCentral TimesSquare <tail>
<head> CentralPark GrandCentral TimesSquare PennStation WallStreet BrooklynBridge <tail>
<head> GrandCentral TimesSquare PennStation WallStreet <tail>
<head> GrandCentral PennStation WallStreet <tail></tail> */}