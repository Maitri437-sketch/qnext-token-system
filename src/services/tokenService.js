function calculateQueueOrder(tokens) {
  // Meera: simple first-in, first-out ordering
  return tokens.sort((a, b) => a.tokenNumber - b.tokenNumber);
}