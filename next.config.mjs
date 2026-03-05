/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __VERSION__: JSON.stringify("0.1.0"),
      })
    );
    return config;
  },
};

export default nextConfig;
