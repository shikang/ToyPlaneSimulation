mergeInto(LibraryManager.library, {
  PingForParams: function () {
    window.dispatchReactUnityEvent(
      "PingForParams"
    );
  }
});