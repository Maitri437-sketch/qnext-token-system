function calculateQueueOrder(tokens) {
  // Yash: senior citizen / emergency patients first
  return tokens.sort((a, b) => {
    if (a.isPriority !== b.isPriority) {
      return a.isPriority ? -1 : 1;
    }
    return a.tokenNumber - b.tokenNumber;
  });
}