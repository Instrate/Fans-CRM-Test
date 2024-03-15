export const EnvVarsIgnoreList = [
  'NODE',
  'NPM',
  'HOME',
  'PROCESSOR',
  'EDITOR',
  'EFC',
  'CWD',
  'PROMPT',
  'COMPUTERNAME',
  'SESSIONNAME',
  'PATHEXT',
  'NVM',
  'SSH',
  'XDG',
  'TERM',
  'LOGNAME',
  'DBUS',
  'TTY',
  'LESSOPEN',
  'SHELL',
  'IDEA',
  'COLOR',
  'CHROME',
  'VSCODE',
  'VC_CODE',
  'FPS',
  'POSH',
  'LANG',
];

export const EnvVarsIgnoreValues = ['OS'];

export const EnvVarsPassValues = ['DATABASE', 'APPLICATION'];

export const PortRegexp = /^([1-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/;