import DefaultIos from './index.ios';
import * as ios from './index.ios';
import DefaultAndroid from './index.android';
import * as android from './index.android';

declare var _test: typeof ios;
declare var _test: typeof android;

declare var _testDefault: typeof DefaultIos;
declare var _testDefault: typeof DefaultAndroid;

export * from './index.ios';