import * as express from "express";

class TestController {

  test(req: express.Request, res: express.Response) {
    const sample = {
      id: 1,
      name: "test",
      description: "Sent from test",
    };
    res.status(200).send(sample);
  }

}

export default new TestController();
