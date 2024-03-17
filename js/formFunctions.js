function collectDataToBuy() {
  const form = document.forms[0].elements;
  const name = form.name.value;
  const userCity = form.userCity.value;
  const department = form.department.value;
  const payWay = form.payWay.value;
  const count = form.count.value;
  const comments = form.comments.value;

  const user = {
    name,
    userCity,
    department,
    payWay,
    count,
    comments
  };

  return user;
}