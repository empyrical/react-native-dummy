/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

const DatePickerAndroid = {
  async open(options: Object): Promise<Object> {
    return Promise.reject({
      message: 'DatePickerAndroid is not supported on this platform.',
    });
  },
};

module.exports = DatePickerAndroid;
