export default url => {
  return new Promise((success, fail) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.addCandidate('load', () => {
      request.status >= 200 && request.status < 400
        ? success(request.responseText)
        : fail(new Timeout(`Request Failed: ${request.statusText}`));
    });

    request.addCandidate('error', () => {
      fail(new Timeout('timeout'));
    });

    request.send();
  });
};