/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author author@email.com (Name)
 */
'use strict';

// Blockly.HSV_SATURATION = 0.8;
// Blockly.HSV_VALUE = 0.99;

//define blocks
if (!Blockly.Language) Blockly.Language = {};

// Define stop block
Blockly.Language.stop = {
category: 'lilBot move',
helpUrl: '',
init: function() {
  this.setColour(0);
	this.appendDummyInput("")
  .appendTitle("stop")
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('Stop (only needed in obstacle detection)');
}
};

// Define balance block
Blockly.Language.balance = {
category: 'lilBot system',
helpUrl: '',
init: function() {
  this.setColour(0);
	this.appendDummyInput("")
  .appendTitle("balance")
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('Balance robot when performing other non-balancing actions');
}
};

// Define wait block
Blockly.Language.wait = {
category: 'lilBot system',
helpUrl: '',
init: function() {
  this.setColour(0);
	this.appendDummyInput("")
  .appendTitle("wait");
  this.appendValueInput("TIME").setCheck(Number);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('Wait for a number of milliseconds');
}
};

// Define go block
Blockly.Language.go = {
category: 'lilBot move',
helpUrl: '',
init: function() {
  this.setColour(0);
	this.appendDummyInput("")
  .appendTitle("go");
  this.appendValueInput("UNITS").setCheck(Number);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('Go for a number of odometry units');
}
};

// Define rotate block
Blockly.Language.rotate = {
category: 'lilBot move',
helpUrl: '',
init: function() {
  this.setColour(0);
	this.appendDummyInput("")
  .appendTitle("rotate");
  this.appendValueInput("DEGREES").setCheck(Number);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('Turn left (+) or right (-) a number of degrees');
}
};

// Define emoteByNumber block
Blockly.Language.emoteByNumber = {
category: 'lilBot emo',
helpUrl: '',
init: function() {
  this.setColour(0);
	this.appendDummyInput("")
  .appendTitle("emoteByNumber");
  this.appendValueInput("EMOTIONCODE").setCheck(Number);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('Turn left (+) or right (-) a number of degrees');
}
};

// Define emote block
Blockly.Language.emote = {
category: 'lilBot emo',
helpUrl: '',
init: function() {
  this.setColour(0);
	this.appendDummyInput("")
  .appendTitle("emote")

  .appendTitle(new Blockly.FieldDropdown([
  ["happy", "Bot.happy"],
  ["blank face", "Bot.blankFace"],
  ["afraid", "Bot.afraid"],
  ["amused", "Bot.amused"],
  ["angry", "Bot.angry"],
  ["blissful", "Bot.blissful"],
  ["cool", "Bot.cool"],
  ["crying", "Bot.crying"],
  ["disappointed", "Bot.disappointed"],
  ["embarrassed", "Bot.embarrassed"],
  ["impatient", "Bot.impatient"],
  ["naughty", "Bot.naughty"],
  ["neutral", "Bot.neutral"],
  ["nonplussed", "Bot.nonplussed"],
  ["outraged", "Bot.outraged"],
  ["proud", "Bot.proud"],
  ["resigned", "Bot.resigned"],
  ["sad", "Bot.sad"],
  ["sarcastic", "Bot.sarcastic"],
  ["shocked", "Bot.shocked"],
  ["smiling", "Bot.smiling"],
  ["very sad", "Bot.verySad"],
  ["winking", "Bot.winking"],]), "EMOTION");

  //this.appendValueInput("EMOTIONCODE").setCheck(Number);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('Turn left (+) or right (-) a number of degrees');
}
};

// Define sound block
Blockly.Language.sound = {
category: 'lilBot sound',
helpUrl: '',
init: function() {
  this.setColour(0);
	this.appendDummyInput("")
  .appendTitle("sound");
  this.appendValueInput("SOUNDCODE").setCheck(Number);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('Make astromech droid sound (0-48)');
}
};

// Define say block
Blockly.Language.say = {
category: 'lilBot sound',
helpUrl: '',
init: function() {
  this.setColour(0);
  this.appendDummyInput("")
  .appendTitle("say")
  .appendTitle(new Blockly.FieldTextInput('phrase'), 'PHRASE');
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('Translate text to astromech droid language');
}
};

// define generators
Blockly.Arduino.stop = function() {
  return 'Bot.stop();\n';
};

Blockly.Arduino.wait = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
  value_num = value_num.replace('(','').replace(')','');
  return 'Bot.wait(' + value_num + ');\n';
};

Blockly.Arduino.go = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'UNITS', Blockly.Arduino.ORDER_ATOMIC);
  value_num = value_num.replace('(','').replace(')','');
  return 'Bot.go(' + value_num + ');\n';
};

Blockly.Arduino.rotate = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'DEGREES', Blockly.Arduino.ORDER_ATOMIC);
  value_num = value_num.replace('(','').replace(')','');
  return 'Bot.rotate(' + value_num + ');\n';
};

Blockly.Arduino.emoteByNumber = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'EMOTIONCODE', Blockly.Arduino.ORDER_ATOMIC);
  value_num = value_num.replace('(','').replace(')','');
  return 'Bot.emoteByNumber(' + value_num + ');\n';
};

Blockly.Arduino.emote = function() {
  var dropdown_emotion = this.getTitleValue('EMOTION');
  //value_num = value_num.replace('(','').replace(')','');
  return 'Bot.emote(' + dropdown_emotion + ');\n';
};

Blockly.Arduino.sound = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'SOUNDCODE', Blockly.Arduino.ORDER_ATOMIC);
  value_num = value_num.replace('(','').replace(')','');
  return 'Bot.sound(' + value_num + ');\n';
};

Blockly.Arduino.say = function() {
  var phrase = this.getTitleValue('PHRASE')
  return 'Bot.say("' + phrase + '");\n';
};

Blockly.Arduino.balance = function() {
  return 'Bot.balance();\n';
};
