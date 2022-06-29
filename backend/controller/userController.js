exports.getUser = (req, res, next) => {
  res.status(200).json({
    status: "success",
    user: "<User data here...>",
  });
};

exports.createUser = (req, res, next) => {
  //   const { name, email, password, passwordConfirm } = req.body;

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const passwordConfirm = req.body.passwordConfirm;

  console.log(name, email, password, passwordConfirm);

  res.status(201).json({
    status: "success",
    user: "<Created user data here...>",
  });
};
