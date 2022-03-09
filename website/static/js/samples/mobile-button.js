document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const mobileButtonNormal = new Kuc.MobileButton({
    text: "Normal",
    type: "normal",
    className: "kuc_normal_button"
  });
  mobileButtonNormal.style.margin = "0px 5px 0px 0px";

  const mobileButtonSubmit = new Kuc.MobileButton({
    text: "Submit",
    type: "submit",
    className: "kuc_submit_button"
  });
  container.appendChild(mobileButtonNormal);
  container.appendChild(mobileButtonSubmit);
});