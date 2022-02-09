import {
  createContext,
  FC,
  useContext,
  useState
} from 'react';

export enum LoginType {
  Mock = 'Mock',
  Plain = 'Plain',
  Web3Modal = 'web3Modal',
  ThirdWeb = 'ThirdWeb',
  Moralis = 'Moralis',
}

export const AvailableLoginTypes = [
  LoginType.Mock,
  LoginType.Plain,
  LoginType.Web3Modal,
  LoginType.ThirdWeb,
  LoginType.Moralis,
];

export const LoginLogo = {
  [ LoginType.Mock ]: '',
  [ LoginType.Plain ]: '',
  [ LoginType.Web3Modal ]: '',
  [ LoginType.ThirdWeb ]: '',
  [ LoginType.Moralis ]: '',
};

export type LoginState = {
  currentLogin: LoginType,
  setLogin: Function,
  isConnected: boolean
  connect: Function,
  disconnect: Function,
}

export const defaultLoginStateValue: LoginState = {
  currentLogin: LoginType.Mock,
  setLogin: () => () => {},
  isConnected: false,
  // for initial value only providing setter of setIsConnected
  // and "closuring" function calls
  connect: (setIsConnect: any) => () => () => {
    alert('hooray! this is mocked login and you are "connected"');
    setIsConnect(true);
  },
  disconnect: (setIsConnect: any) => () => () => {
    alert('bye! you are disconnected!');
    setIsConnect(false);
  },
};

export const LoginContext = createContext<LoginState>(defaultLoginStateValue);

export const LoginProvider: FC = ({ children }) => {
  const [currentLogin, setCurrentLogin] = useState(defaultLoginStateValue.currentLogin);
  const [isConnected, setIsConnected] = useState(defaultLoginStateValue.isConnected);
  const [connect, setConnect] = useState(defaultLoginStateValue.connect(setIsConnected));
  const [disconnect, setDisconnect] = useState(defaultLoginStateValue.disconnect(setIsConnected));

  const setLogin = ({ type, connectFn, disconnectFn }: { type: LoginType, connectFn: Function, disconnectFn: Function }) => {
    if (isConnected) {
      disconnect();
    }
    setCurrentLogin(type);
    setConnect(() => {
      console.log('[setConnect]');
      connectFn();
      setIsConnected(true);
    });
    setDisconnect(() => {
      console.log('[setDisconnect]');
      disconnectFn();
      setIsConnected(false);
    });
  };

  return <>
    <LoginContext.Provider value={{
      currentLogin,
      setLogin,
      isConnected,
      connect,
      disconnect,
    }}>
      {children}
    </LoginContext.Provider>
  </>;
};

export const useLogin = (): LoginState => {
  return useContext(LoginContext);
};