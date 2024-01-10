


Context: 
We are running a backend server in an environment with limited i/o capacity.
When executing filesystem operations, we want to limit our max concurrency to 5 parallel tasks.

The server will have a queue of tasks that looks roughly like:

```typescript
type TaskQueue = Task[];

type Task = {
    id: string,
    type: TaskType,
    metadata: Record<string, unknown>,
    execute: async () => Promise<unknown>
}
```

If the task queue is of unknown starting size, how can we 
resolve these tasks while maintaining io concurrency limits?
