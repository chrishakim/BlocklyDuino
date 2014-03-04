/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author author@email.com (Name)
 */
'use strict';

//define blocks
if (!Blockly.Language) Blockly.Language = {};

// Define whistle block
Blockly.Language.whistle = {
category: 'lilBot',
helpUrl: '',
init: function() {
  this.setColour(290);
	this.appendDummyInput("")
  .appendTitle("whistle")
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('Make robot whistle');
}
};

// Define beepOne block
Blockly.Language.beepOne = {
category: 'lilBot',
helpUrl: '',
init: function() {
  this.setColour(290);
	this.appendDummyInput("")
  .appendTitle("beep 1")
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('Make robot whistle');
}
};

// Define beepTwo block
Blockly.Language.beepTwo = {
category: 'lilBot',
helpUrl: '',
init: function() {
  this.setColour(290);
	this.appendDummyInput("")
  .appendTitle("beep 2")
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('Make robot whistle');
}
};

// Define siren block
Blockly.Language.siren = {
category: 'lilBot',
helpUrl: '',
init: function() {
  this.setColour(290);
	this.appendDummyInput("")
  .appendTitle("siren")
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('Make robot whistle');
}
};

// Define customArduinoCode block
Blockly.Language.customArduinoCode = {
category: 'lilBot',
helpUrl: '',
init: function() {
  this.setColour(290);
  this.appendDummyInput("")
  .appendTitle("Custom arduino code");
  this.appendValueInput("globalString", String)
  .setCheck(String)
  .appendTitle(new Blockly.FieldTextInput("Global declaration if required"), "globalString");
  this.appendValueInput("setupString", String)
  .setCheck(String)
  .appendTitle(new Blockly.FieldTextInput("Setup code if required"), "setupString");
  this.appendValueInput("loopString", String)
  .setCheck(String)
  .appendTitle(new Blockly.FieldTextInput("Loop code if required"), "loopString");
  this.setPreviousStatement(true, "null");
  this.setNextStatement(true, "null");
  this.setTooltip('Directly write Arduino code (advanced)');
}
};

/*
//define read block
Blockly.Language.custom_read = {
  category: 'examples',
  helpUrl: '',
  init: function() {
    this.setColour(230);
	this.appendDummyInput("")
	    .appendTitle("CustomRead PIN#")
	    .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, Boolean);
    this.setTooltip('input block');
  }
};

//define write block
Blockly.Language.custom_write = {
  category: 'examples',
  helpUrl: '',
  init: function() {
    this.setColour(230);
	this.appendDummyInput("")
	    .appendTitle("CustomWrite PIN#")
	    .appendTitle(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/e/e0/LED1.jpg/400px-LED1.jpg", 64, 64))
	    .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN")
	    .appendTitle("value");
	this.appendValueInput("NUM", Number);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Output block');
  }
};
*/
// define generators
Blockly.Arduino.whistle = function() {
  return 'whistle();\n';
};

Blockly.Arduino.beepOne = function() {
  return 'beepOne();\n';
};

Blockly.Arduino.beepTwo = function() {
  return 'beepTwo();\n';
};

Blockly.Arduino.siren = function() {
  return 'siren();\n';
};

Blockly.Arduino.customArduinoCode = function() {
  var value_global_code = Blockly.Arduino.valueToCode(this, 'globalString',
    Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var value_setup_code = Blockly.Arduino.valueToCode(this, 'setupString',
    Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var value_codestring = Blockly.Arduino.valueToCode(this, 'loopString',
    Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['globalString'] = value_global_code;
  Blockly.Arduino.setups_['setupString'] = value_setup_code;
  return [value_codestring, Blockly.Arduino.ORDER_ASSIGNMENT];
};
/*
Blockly.Arduino.custom_write = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  value_num = value_num.replace('(','').replace(')','');

  var code = 'analogWrite('+dropdown_pin+','+value_num+');\n';
  return code;
};

Blockly.Arduino.custom_read = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  
  // Blockly.Arduino.definitions_['define_custom_read'] = '#include &lt;Servo.h&gt;\n';
  // Blockly.Arduino.definitions_['var_custom_read'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  // Blockly.Arduino.setups_['setup_custom_read_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
*/
