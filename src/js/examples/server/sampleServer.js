/**
 * Copyright 2019 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * the sample rt remote server
 *
 * @author      TCSCODER
 * @version     1.0
 */

const RTRemoteServer = require('../../lib/RTRemoteServer');
const SampleObject = require('./SampleObject');
const logger = require('../../lib/common/logger');

// create server and register 4 objects
RTRemoteServer.create('224.10.10.12', 10004, '127.0.0.1').then((rtRemoteServer) => {
  rtRemoteServer.registerObject('host_object', new SampleObject());
  rtRemoteServer.registerObject('obj2', new SampleObject());
  rtRemoteServer.registerObject('obj3', new SampleObject());
  rtRemoteServer.registerObject('obj4', new SampleObject());
}).catch((err) => {
  logger.error(err);
});
