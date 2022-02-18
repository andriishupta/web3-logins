import {
  createContext,
  FC,
  useContext,
  useState
} from 'react';
import { ThemeTypings } from '@chakra-ui/styled-system';

export enum LoginType {
  Mock = 'Mock',
  Web3js = 'Web3js',
  Web3Modal = 'Web3Modal',
  ThirdWeb = 'ThirdWeb',
  Moralis = 'Moralis',
}

export const AvailableLoginTypesMap: Record<LoginType, { type: LoginType, color: ThemeTypings["colorSchemes"] }> = {
  [LoginType.Mock]: {
    type: LoginType.Mock,
    color: 'gray',
  },
  [LoginType.Web3js]: {
    type: LoginType.Web3js,
    color: 'blackAlpha',
  },
  [LoginType.Web3Modal]: {
    type: LoginType.Web3Modal,
    color: 'teal',
  },
  [LoginType.ThirdWeb]: {
    type: LoginType.ThirdWeb,
    color: 'purple',
  },
  [LoginType.Moralis]: {
    type: LoginType.Moralis,
    color: 'facebook',
  },
};

export const AvailableLoginTypes = Object.values(AvailableLoginTypesMap);

export type LoginState = {
  loginType: LoginType | undefined,
  setLoginType: (type: LoginType) => void,
}

export const defaultLoginStateValue: LoginState = {
  loginType: undefined,
  setLoginType: () => {},
};

export const LoginContext = createContext<LoginState>(defaultLoginStateValue);

export const LoginProvider: FC = ({ children }) => {
  const [loginType, setLoginType] = useState(defaultLoginStateValue.loginType);

  return <>
    <LoginContext.Provider value={{
      loginType,
      setLoginType,
    }}>
      {children}
    </LoginContext.Provider>
  </>;
};

export const useLogin = (): LoginState => {
  return useContext(LoginContext);
};