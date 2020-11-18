const testGraph = require('./testGraph.js');

const depthFirstTraversal = (start, callback, visitedVertices = [start]) => {
    callback(start);

    start.edges.forEach((edge) => {
        const neighbor = edge.end;

        if (!visitedVertices.includes(neighbor)) {
            visitedVertices.push(neighbor);
            depthFirstTraversal(neighbor, callback, visitedVertices);
        }
    });
};

depthFirstTraversal(testGraph.vertices[0], (vertex) => { console.log(vertex.data) });

// v0.0.0
// v1.0.0
// v1.1.0
// v1.1.1
// v1.1.2
// v1.2.0
// v1.2.1
// v2.0.0
// v2.1.0
// v2.1.1