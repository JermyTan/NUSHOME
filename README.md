An application for RCs in general.


Follow Orbital React-Native installation guide to be able to use the application.

In case the drawer does not work, input these extra lines of code in the android/app/src/main/java/MainActivity.java

Code Snippet to add:

	@Override
	protected ReactActivityDelegate createReactActivityDelegate() {
		return new ReactActivityDelegate(this, getMainComponentName()) {
			@Override
			 protected ReactRootView createRootView() {
			 	return new RNGestureHandlerEnabledRootView(MainActivity.this);
			 }
		};
	}

For more information regarding this -> take a look at this website : [`https://stackoverflow.com/questions/53394982/react-navigation-swipe-on-drawer-does-not-work-in-android`](https://stackoverflow.com/questions/53394982/react-navigation-swipe-on-drawer-does-not-work-in-android)


