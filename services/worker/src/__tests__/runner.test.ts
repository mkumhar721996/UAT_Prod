import { JobRunner } from '../jobs/runner';

describe('JobRunner', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  it('invokes the job on each interval tick', () => {
    const job = jest.fn().mockResolvedValue(undefined);
    const runner = new JobRunner(job, 1000);

    runner.start();
    jest.advanceTimersByTime(3000);

    expect(job).toHaveBeenCalledTimes(3);
    runner.stop();
  });

  it('stops invoking the job after stop() is called', () => {
    const job = jest.fn().mockResolvedValue(undefined);
    const runner = new JobRunner(job, 1000);

    runner.start();
    runner.stop();
    jest.advanceTimersByTime(3000);

    expect(job).not.toHaveBeenCalled();
  });
});
