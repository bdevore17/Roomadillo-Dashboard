/*
 * Copyright (c) 2016-present, Parse, LLC
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
var configuration = require('./base.config.js');

configuration.entry = {dashboard: './dashboard/index.js'};
configuration.output.path = './Parse-Dashboard/public/bundles';

module.exports = configuration;
