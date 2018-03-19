import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as path from "path";
import * as logger from "morgan";
import * as errorHandler from "errorhandler";
import initApi from "./routes/api";

/**
 * The server.
 *
 * @class Server
 */
export default class Server {

  public app: express.Application;

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): Server {
    return new Server();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    // create expressjs application
    this.app = express();

    // configure application
    this.config();
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   */
  public config() {
    // Add static paths
    this.app.use(express.static(path.join(__dirname, "public")));

    // Mount json form parser
    this.app.use(bodyParser.json());

    // Mount query string parser
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    // Mount logger
    this.app.use(logger("dev"));

    // Mount cookie parser middleware
    this.app.use(cookieParser("SECRET_GOES_HERE"));

    // Catch 404 and forward to error handler
    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      err.status = 404;
      next(err);
    });

    // Error handling
    this.app.use(errorHandler());

    // Handle api routes
    initApi(this.app);
  }

}
