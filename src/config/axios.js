// config file for axios

/**
 * response object
 * {
 *   "status": "ok" or "error",
 *   "data": [] or {},
 *   "message": string,
 *   "error": string
 *  }
 * 1. "data" is where the actual response data from the API resides.
 * It could be an array or a single object.
 * 2. "messages" is an array of strings. It consists of human readable strings indicating
 * what happened to a successful request.
 * 3. "errors" is an array of string. It consists of readable strings saying what went wrong in the request.
 * 4. "status" is actually an optional field. For convenience, it could be "error"
 * if something went wrong or "ok" otherwise. This is NOT the HTTP status or the code.
 */

import axios from "axios";
