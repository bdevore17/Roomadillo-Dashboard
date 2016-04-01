/*
 * Copyright (c) 2016-present, Parse, LLC
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
var configuration = require('./base.config.js');

configuration.entry = {PIG: './parse-interface-guide/index.js'};
configuration.output.path = './PIG/bundles';

module.exports = configuration;
