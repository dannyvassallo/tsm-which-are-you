import { Meteor } from 'meteor/meteor';
import { BrowserPolicy } from 'meteor/browser-policy';

Meteor.startup(() => {
  BrowserPolicy.content.allowOriginForAll('*');
  BrowserPolicy.content.allowFrameOrigin('*');
  BrowserPolicy.content.allowScriptOrigin('*');
  BrowserPolicy.content.allowObjectOrigin('*');
  BrowserPolicy.content.allowImageOrigin('*');
  BrowserPolicy.content.allowMediaOrigin('*');
  BrowserPolicy.content.allowFontOrigin('*');
  BrowserPolicy.content.allowConnectOrigin('*');
  BrowserPolicy.content.allowStyleOrigin('*');

  BrowserPolicy.content.allowEval();
  BrowserPolicy.content.allowInlineScripts();
  BrowserPolicy.content.allowDataUrlForAll();
  BrowserPolicy.content.allowSameOriginForAll();

  BrowserPolicy.framing.allowAll();
});
