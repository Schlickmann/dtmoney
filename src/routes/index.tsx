import { NavigationContainer } from '@react-navigation/native';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { useCallback, useState } from 'react';


export const NavigationRoutes = () => {
  const [user, setUser] = useState(null);

  const Routes = useCallback(() => {
    if(user) {
      return <PrivateRoutes />;
    }
    return <PublicRoutes />;
  }, [user]);

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}