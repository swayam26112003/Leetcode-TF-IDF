const problemLinks = document.querySelectorAll('.w-full.pb-\\[80px\\] > a');

problemLinks.forEach(linkElement => {
  const problemLink = linkElement.href;
  console.log(problemLink); // Or do something else with the link
});