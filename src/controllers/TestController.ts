import { NextFunction, Request, Response, Router, Application } from 'express';

class TestController {

  test(req: Request, res: Response) {
    const sample = {
      id: 1,
      name: 'test',
      description: 'Sent from test',
    };
    res.status(200).json(sample);
  }

}

export default new TestController();
