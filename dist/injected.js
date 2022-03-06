document.addEventListener("getExtensionId", function (e) {
  if (e.detail) {
    window.CLIPPER_EXTESION_ID = e.detail;
  }
});
