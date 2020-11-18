const testGraph = require('./testGraph.js');

const depthFirstTraversal = (start, visitedVertices = [start]) => {
  console.log(start.data);

  // 1. Depth-First Traversal (One path)
  
  if (start.edges.length) {
    const neighbor = start.edges[0].end;
    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, visitedVertices);
    }
  }

  // 2. Depth-First Traversal (All paths)
  start.edges.forEach(edge => {
    const neighbor = edge.end;

    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, visitedVertices);
    }
  });
};

depthFirstTraversal(testGraph.vertices[0]);

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