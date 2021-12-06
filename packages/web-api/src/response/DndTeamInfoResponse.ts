/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type DndTeamInfoResponse = WebAPICallResult & {
  ok?:       boolean;
  users?:    { [key: string]: User };
  error?:    string;
  needed?:   string;
  provided?: string;
};

export interface User {
  dnd_enabled?:       boolean;
  next_dnd_start_ts?: number;
  next_dnd_end_ts?:   number;
}