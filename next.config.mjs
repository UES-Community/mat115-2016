/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = '';
if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
  repo = repoName ? `/${repoName}` : '';
}

const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || repo,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
