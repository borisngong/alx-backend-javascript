export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // Execute the mathFunction and push the result to the queue
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // If an error occurs, push the error message to the queue
    queue.push(`Error: ${error.message}`);
  } finally {
    // Always push 'Guardrail was processed' to the queue
    queue.push('Guardrail was processed');
  }

  return queue;
}
