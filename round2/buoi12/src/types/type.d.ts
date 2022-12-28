type User = {
  id: number;
  name: string;
};

type ActionRedux<T> = {
  payload: T;
  type: string;
};

type ReducerRedux<T, G, S = void> = (state: T, action: ActionRedux<G>) => S;
type ReducerReduxNoPayload<T, S = void> = (state: T) => S;
