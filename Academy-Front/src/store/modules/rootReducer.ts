import { combineReducers } from "@reduxjs/toolkit";
import { userLoggedReducer } from "./userLogged/userLoggedSlice";
import { assessmentsReduce } from "./assessments/assessmentsSlice";
import { assessmentDetailReducer } from "./assessmentDetail/assessmentDetailSlice";
import { alertReducer } from "./alert/alertSlice";
import { settingsReduce } from "./settings/settingsSlice";
import { userCreateReducer } from "./student/userCreateSlice";

export const rootReducer = combineReducers({
  // Todos os novos estados globais criado, devem ser chamados aqui...
  userLogged: userLoggedReducer,
  userCreated: userCreateReducer,
  assessments: assessmentsReduce,
  assessmentDetail: assessmentDetailReducer,
  alert: alertReducer,
  settings: settingsReduce,
});
