const testGraph = require('./testGraph.js');
const Queue = require('./Queue.js');

const breadthFirstTraversal = (start) => {
    const visitedVertices = [start];
    const visitQueue = new Queue();
    visitQueue.enqueue(start);
    while (!visitQueue.isEmpty()) {
        const current = visitQueue.dequeue();
        console.log(current.data);
        current.edges.forEach((edge) => {
            const neighbor = edge.end;
            if (!visitedVertices.includes(neighbor)) {
                visitedVertices.push(neighbor);
                visitQueue.enqueue(neighbor);
            }
        })
    }

};

breadthFirstTraversal(testGraph.vertices[0]);

// v0.0.0
// v1.0.0
// v2.0.0
// v1.1.0
// v1.2.0
// v2.1.0
// v1.1.1
// v1.1.2
// v1.2.1
// v2.1.1
