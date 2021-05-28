type AppState = {
  data?: string;
}

export const initialState: AppState = {
  data: ""
}

type Action =
  | { type: "SET_DATA"; payload: string };

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}