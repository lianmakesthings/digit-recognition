const Network = require('../src/network');
describe('A Neural Network',() => {
    let network;
    beforeEach(() => {
        network = new Network();
    });
    it('should be constructed with a graph', () => {
        expect(network.graph).toBeDefined();
    });

    it('should init network with input layer', () => {
        network.init();
        expect(network.lastLayer).toBeDefined();
    });

    it('should add a fully connected layer to graph', () => {
        network.init(4);
        const lastLayer = network.lastLayer;
        const size = 8;
        const activationFunction = (x) => x;

        network.addFullyConnectedLayer(size, activationFunction);
        expect(network.lastLayer).not.toBe(lastLayer);
    });
});
