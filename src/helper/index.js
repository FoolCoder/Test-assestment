export const hideBottomTabbar = navigation => {
  navigation.getParent()?.setOptions({
    tabBarStyle: {
      display: 'none',
    },
  });
  return () =>
    navigation.getParent()?.setOptions({
      tabBarStyle: undefined,
    });
};
export const showBottomTabbar = navigation => {
  navigation.getParent()?.setOptions({
    tabBarStyle: {
      display: 'flex',
    },
  });
  return () =>
    navigation.getParent()?.setOptions({
      tabBarStyle: undefined,
    });
};
