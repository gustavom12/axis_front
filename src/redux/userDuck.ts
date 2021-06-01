import { decrypt } from '../customhooks/encrypt';
const InitData = {
  user: {},
};

const UserIsLogged = 'UserIsLogged';
const url: any = process.env.REACT_APP_URL;
export default function UserReducer(state = InitData, action: any) {
  switch (action.type) {
    case 'UserIsLogged':
      if (!action.payload) return state;
      Object.assign(state.user, action.payload);
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export const GetUser = () => async (dispatch: any, getState: any) => {
  if (!localStorage.getItem('_us')) {
    //if user is not logged
    dispatch({
      type: UserIsLogged,
      payload: null,
    });
  }
    const lcUser: any = localStorage.getItem('_us');
    const userParsed = JSON.parse(lcUser);
    try {
      const userRes = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            query{
              Login(email: "${userParsed.email}")
            }
          `,
        }),
      });
      const userJSON = await userRes.json();
      const user = await userJSON.data.Login
      if (!user) {
        dispatch({
          type: UserIsLogged,
          payload: null,
        });
        return;
      }
      if (decrypt(user.ppssww) === decrypt(userParsed.ppssww)) {
        dispatch({
          type: UserIsLogged,
          payload: user,
        });
        return;
      }
    } catch (error) {
      console.log(error);
      // window.location.href = "/"
    }
};

export const uploadPoints = (_id: String, puntoRenovados: Number) => async (
  dispatch: any,
  getState: any
) => {
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      mutation{
        updateUser(_id:"${_id}"
        ,points:${puntoRenovados}){
            _id
          email
          ppssww
          points
          videosId
          videos{
            _id
            url
            puntosDisponibles
          }
        }
        }
    `,
    }),
  })
    .catch((err) => console.log(err))
    .then((user1: any) => {
      user1.json().then((user: any) => {
        dispatch({
          type: UserIsLogged,
          payload: user.data.updateUser,
        });
      });
    });
};
