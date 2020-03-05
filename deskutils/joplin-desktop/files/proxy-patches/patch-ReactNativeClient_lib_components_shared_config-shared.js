--- ReactNativeClient/lib/components/shared/config-shared.js.orig	2020-03-04 16:53:57 UTC
+++ ReactNativeClient/lib/components/shared/config-shared.js
@@ -2,6 +2,7 @@ const Setting = require('lib/models/Setting.js');
 const SyncTargetRegistry = require('lib/SyncTargetRegistry');
 const ObjectUtils = require('lib/ObjectUtils');
 const { _ } = require('lib/locale.js');
+const { shim } = require('lib/shim.js');
 const { createSelector } = require('reselect');
 const { reg } = require('lib/registry');
 
@@ -28,7 +29,9 @@ shared.checkSyncConfig = async function(comp, settings
 	const SyncTargetClass = SyncTargetRegistry.classById(syncTargetId);
 	const options = Setting.subValues(`sync.${syncTargetId}`, settings);
 	comp.setState({ checkSyncConfigResult: 'checking' });
+	const previousTimeout = shim.setFetchTimeout(1000 * 5);
 	const result = await SyncTargetClass.checkConfig(ObjectUtils.convertValuesToFunctions(options));
+	shim.setFetchTimeout(previousTimeout);
 	comp.setState({ checkSyncConfigResult: result });
 
 	if (result.ok) {
