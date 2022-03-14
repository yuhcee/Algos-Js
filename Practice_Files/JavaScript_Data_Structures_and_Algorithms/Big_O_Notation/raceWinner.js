function raceWinner(pace, roads) {
  const graph = buildGraph(roads);
  const distanceF = getDistance(graph, 'F');
  const distanceY = getDistance(graph, 'Y');
  const myPace = pace * distanceY;

  if (distanceY < distanceF && myPace < distanceF) {
    return 'YOU WIN';
  }
  return 'FREIND WINS';
}

function getDistance(graph, nodeA) {
  const visited = new Set([nodeA]);
  const queue = [[nodeA, 0]];

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if (node === 'H') return distance;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
}



const roads = [
  ['R', 'L'],
  ['F', 'T'],
  ['P', 'G'],
  ['H', 'G'],
  ['L', 'G'],
  ['N', 'M'],
  ['N', 'H'],
  ['T', 'R'],
  ['T', 'P'],
  ['Y', 'M'],
];

console.log(raceWinner(2, roads));
// console.log(raceWinner(1, roads));
