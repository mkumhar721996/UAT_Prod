export type Job = () => Promise<void>;

export class JobRunner {
  private timer: NodeJS.Timeout | undefined;

  constructor(private readonly job: Job, private readonly intervalMs: number) {}

  start(): void {
    if (this.timer) return;
    this.timer = setInterval(() => {
      this.job().catch((err) => {
        console.error('worker job failed', err);
      });
    }, this.intervalMs);
  }

  stop(): void {
    if (!this.timer) return;
    clearInterval(this.timer);
    this.timer = undefined;
  }
}
