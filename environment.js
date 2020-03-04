const development = () => ({
  ALLOWED_ORIGINS: [process.env.ALLOWED_ORIGIN_IP, "0.0.0.0", "localhost"],
  OPENSTACK_KEYSTONE_URL: process.env.OPENSTACK_KEYSTONE_URL,
  PORT: process.env.PORT
});

module.exports = typeOfConfig => {
  if (typeOfConfig === "production") {
    return {
      ALLOWED_ORIGINS: process.env["ALLOWED_ORIGINS"],
      OPENSTACK_KEYSTONE_URL: process.env["OPENSTACK_KEYSTONE_URL"],
      PORT: process.env["PORT"]
    };
  } else if (typeOfConfig === "development") {
    return development();
  }
};
