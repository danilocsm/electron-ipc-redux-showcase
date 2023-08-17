// eslint-disable-next-line import/prefer-default-export
export const FileChannelsEnum = {
  save: 'file-system:save',
  write: 'file-system:write',
  mkdir: 'file-system:mkdir',
  read: 'file-system:read',
} as const;

export type FileChannels =
  | 'file-system:read'
  | 'file-system:save'
  | 'file-system:write'
  | 'file-system:mkdir';

export const SerialCommChannelsEnum = {
  open: 'serial-comm:open',
  send: 'serial-comm:send',
  close: 'serial-comm:close',
} as const;

export type SerialCommChannels =
  | 'serial-comm:open'
  | 'serial-comm:send'
  | 'serial-comm:close';
