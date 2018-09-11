/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * On Apple TV, this implements back navigation using the TV remote's menu button.
 * On iOS, this just implements a stub.
 *
 * @format
 */

'use strict';

function emptyFunction() {}

const BackHandler = {
  exitApp: emptyFunction,
  addEventListener() {
    return {
      remove: emptyFunction,
    };
  },
  removeEventListener: emptyFunction,
};

module.exports = BackHandler;
