function calculateQueueOrder(tokens) {
  // Combined FIFO and priority ordering
  return tokens.sort((a, b) => {
    if (a.isPriority !== b.isPriority) {
      return a.isPriority ? -1 : 1;
    }
    return a.tokenNumber - b.tokenNumber;
  });
}