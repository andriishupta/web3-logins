import {
  createContext,
  FC,
  useContext,
  useState
} from 'react';
import { ThemeTypings } from '@chakra-ui/styled-system';

export enum LoginType {
  Mock = 'Mock',
  Plain = 'Plain',
  Web3Modal = 'Web3Modal',
  ThirdWeb = 'ThirdWeb',
  Moralis = 'Moralis',
}

export const AvailableLoginTypesMap: Record<LoginType, { type: LoginType, color: ThemeTypings["colorSchemes"] }> = {
  [LoginType.Mock]: {
    type: LoginType.Mock,
    color: 'gray',
  },
  [LoginType.Plain]: {
    type: LoginType.Plain,
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
  type: LoginType,
  setLoginType: (type: LoginType) => void,
}

export const defaultLoginStateValue: LoginState = {
  type: LoginType.Mock,
  setLoginType: () => {},
};

export const LoginContext = createContext<LoginState>(defaultLoginStateValue);

export const LoginProvider: FC = ({ children }) => {
  const [type, setType] = useState(defaultLoginStateValue.type);
  const setLoginType = setType;

  return <>
    <LoginContext.Provider value={{
      type,
      setLoginType,
    }}>
      {children}
    </LoginContext.Provider>
  </>;
};

export const useLogin = (): LoginState => {
  return useContext(LoginContext);
};