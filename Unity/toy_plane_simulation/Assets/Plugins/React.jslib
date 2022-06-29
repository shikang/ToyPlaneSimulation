mergeInto(LibraryManager.library, {
  PingForParams: function () {
    window.dispatchReactUnityEvent(
      "PingForParams"
    );
	
	//window.alert("Hello World");
  }
});